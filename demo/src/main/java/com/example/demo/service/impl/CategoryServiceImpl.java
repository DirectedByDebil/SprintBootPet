package com.example.demo.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.model.entity.Category;
import com.example.demo.model.dto.CategoryDto;
import com.example.demo.repository.CategoryRepository;
import com.example.demo.service.CategoryService;

@Service
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;

    public CategoryServiceImpl (CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public List<CategoryDto> getCategories() {

        List<Category> all = categoryRepository.findAll();

        if (all.isEmpty()) {
            throw new RuntimeException("No categories found");
        }

        return all.stream()
            .map(this::toDto)
            .toList();
    }

    @Override
    public CategoryDto createCategory(CategoryDto category) {

        Category entity = new Category(
            null,
            category.name(),
            category.stylePreset()
        );

        Category saved = categoryRepository.save(entity);
        return toDto(saved);
    }

    @Override
    public CategoryDto updateCategory(Long id, CategoryDto category) {

        Category entity = categoryRepository
            .findById(id)
            .orElseThrow();

        entity.setName(category.name());
        entity.setStylePreset(category.stylePreset());
        
        Category saved = categoryRepository.save(entity);
        return toDto(saved);
    }
    
    @Override
    public CategoryDto deleteCategory(Long id) {
        
        Category entity = categoryRepository
            .findById(id)
            .orElseThrow();
        
        categoryRepository.delete(entity);;

        return toDto(entity);
    }

    private CategoryDto toDto(Category category) {
        return new CategoryDto(
            category.getId(),
            category.getName(),
            category.getStylePreset()
        );
    }

}
