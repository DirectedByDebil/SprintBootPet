package com.example.demo.service;

import java.util.List;

import com.example.demo.model.dto.CategoryDto;

public interface CategoryService {
    
    public List<CategoryDto> getCategories();
    public CategoryDto createCategory(CategoryDto category);
    public CategoryDto updateCategory(Long id, CategoryDto item);
    public CategoryDto deleteCategory(Long id);
}
