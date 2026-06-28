package com.example.demo.controller;

import java.net.URI;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.CategoryService;
import com.example.demo.model.dto.CategoryDto;

@RestController
@RequestMapping("/api")
public class CategoryController {
    
    private final CategoryService categoryService;

    CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping("/categories")
    public ResponseEntity<List<CategoryDto>> getCategories() {
        return ResponseEntity.ok(categoryService.getCategories());
    }

    @PostMapping("/categories")
    public ResponseEntity<CategoryDto> createCategory (@RequestBody CategoryDto entity) {
        CategoryDto created = categoryService.createCategory(entity);

        return ResponseEntity
            .created(URI.create("/api/categories/" + created.id()))
            .body(created);
    }

    @PutMapping("/category/{id}")
    public ResponseEntity<CategoryDto> putCategory(@PathVariable Long id, @RequestBody CategoryDto entity) {
        return ResponseEntity.ok(categoryService.updateCategory(id, entity));
    }
    
    @DeleteMapping("/category/{id}")
    public ResponseEntity<CategoryDto> deleteCategory(@PathVariable Long id) {
        return ResponseEntity.ok(categoryService.deleteCategory(id));
    }
}
