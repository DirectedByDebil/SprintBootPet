package com.example.demo.service.impl;

import java.util.Arrays;
import java.util.List;

import org.hibernate.Hibernate;
import org.springframework.stereotype.Service;

import com.example.demo.model.dto.ItemDto;
import com.example.demo.model.entity.Category;
import com.example.demo.model.entity.Item;
import com.example.demo.model.entity.Material;
import com.example.demo.repository.CategoryRepository;
import com.example.demo.repository.ItemRepository;
import com.example.demo.repository.MaterialRepository;
import com.example.demo.service.ItemService;

@Service
public class ItemServiceImpl implements ItemService {

    private final ItemRepository itemRepository;
    private final CategoryRepository categoryRepository;
    private final MaterialRepository materialRepository;

    public ItemServiceImpl (
        ItemRepository itemRepository,
        CategoryRepository categoryRepository, 
        MaterialRepository materialRepository) {
        
        this.itemRepository = itemRepository;
        this.categoryRepository = categoryRepository;
        this.materialRepository = materialRepository;
    }

    @Override
    public List<ItemDto> getItems(List<Long> categories,
        List<Long> materials,
        Integer priceFrom,
        Integer priceTo) {

        //todo add filtering
        List<Item> all = itemRepository.findAll();

        if (all.isEmpty()) {
            throw new RuntimeException("No items found");
        }

        return all.stream()
            .map(this::toDto)
            .toList();
    }
    
    @Override
    public ItemDto createItem(ItemDto item) {
        
        List<Long> categoriesIds = Arrays.stream(item.categories()).toList();
        List<Long> materialsIds = Arrays.stream(item.materials()).toList();

        Item entity = new Item(
            null,
            item.name(),
            item.iconPath(),
            categoryRepository.findAllById(categoriesIds),
            materialRepository.findAllById(materialsIds),
            item.price()
        );

        Item created = itemRepository.save(entity);
        return toDto(created);
    }
    
    @Override
    public ItemDto updateItem(Long id, ItemDto item) {

        Item entity = itemRepository
            .findById(id)
            .orElseThrow();

        List<Long> categoriesIds = Arrays.stream(item.categories()).toList();
        List<Long> materialsIds = Arrays.stream(item.materials()).toList();

        entity.setName(item.name());
        entity.setIconPath(item.iconPath());
        entity.setCategories(categoryRepository.findAllById(categoriesIds));
        entity.setMaterials(materialRepository.findAllById(materialsIds));
        entity.setPrice(item.price());

        Item saved = itemRepository.save(entity);
        return toDto(saved);
    }
    
    @Override
    public ItemDto deleteItem(Long id) {

        Item item = itemRepository
            .findById(id)
            .orElseThrow();

        Hibernate.initialize(item.getCategories());
        Hibernate.initialize(item.getMaterials());

        itemRepository.delete(item);
        
        return toDto(item);
    }

    private ItemDto toDto(Item item) {
        return new ItemDto(
            item.getId(),
            item.getName(),
            item.getIconPath(),
            item.getCategories().stream().map(Category::getId).toArray(Long[]::new),
            item.getMaterials().stream().map(Material::getId).toArray(Long[]::new),
            item.getPrice()
        );
    }

}
