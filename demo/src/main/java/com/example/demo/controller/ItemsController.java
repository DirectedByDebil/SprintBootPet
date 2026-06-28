package com.example.demo.controller;

import java.net.URI;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.dto.ItemDto;
import com.example.demo.service.ItemService;


@RestController
@RequestMapping("/api")
public class ItemsController {
    
    private final ItemService itemService;

    ItemsController(ItemService itemService) {
        this.itemService = itemService;
    }

    @GetMapping("/items")
    public ResponseEntity<List<ItemDto>> getItems(
        @RequestParam(name="categories", required=false, defaultValue="") List<Long> categories,
        @RequestParam(name="materials", required=false, defaultValue="") List<Long> materials,
        @RequestParam(name="priceFrom", required=false, defaultValue="") Integer priceFrom,
        @RequestParam(name="priceTo", required=false, defaultValue="") Integer priceTo
    ) {
        return ResponseEntity.ok(itemService.getItems(categories, materials, priceFrom, priceTo));
    }

    @PostMapping("/items")
    public ResponseEntity<ItemDto> createItem(@RequestBody ItemDto item) {
        
        ItemDto created = itemService.createItem(item);

        return ResponseEntity
            .created(URI.create("/api/items/" + created.id()))
            .body(created);
    }

    @PutMapping("/item/{id}")
    public ResponseEntity<ItemDto> putItem(@PathVariable Long id, @RequestBody ItemDto item) {
        return ResponseEntity.ok(itemService.updateItem(id, item));
    }

    @DeleteMapping("/item/{id}")
    public ResponseEntity<ItemDto> deleteItem(@PathVariable Long id) {
        return ResponseEntity.ok(itemService.deleteItem(id));
    }
}
