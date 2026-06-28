package com.example.demo.service;

import java.util.List;

import com.example.demo.model.dto.ItemDto;

public interface ItemService {
    
    public List<ItemDto> getItems(List<Long> categories, List<Long> materials, Integer priceFrom, Integer priceTo);
    public ItemDto createItem(ItemDto item);
    public ItemDto updateItem(Long id, ItemDto item);
    public ItemDto deleteItem(Long id);
}
