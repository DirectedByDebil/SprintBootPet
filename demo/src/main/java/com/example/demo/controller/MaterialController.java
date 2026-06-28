package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.net.URI;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.dto.MaterialDto;
import com.example.demo.service.MaterialService;

@RestController
@RequestMapping("/api")
public class MaterialController {
    
    private final MaterialService materialService;

    MaterialController(MaterialService materialService) {
        this.materialService = materialService;
    }

    @GetMapping("/materials")
    public ResponseEntity<List<MaterialDto>> getMaterials(){
        return ResponseEntity.ok(materialService.getMaterials());
    }

    @PostMapping("/materials")
    public ResponseEntity<MaterialDto> createMaterial(@RequestBody MaterialDto entity) {

        MaterialDto created = materialService.createMaterial(entity);

        return ResponseEntity
            .created(URI.create("/api/materials/" + created.id()))
            .body(created);
    }

    @PutMapping("/material/{id}")
    public ResponseEntity<MaterialDto> putMaterial(@PathVariable Long id, @RequestBody MaterialDto entity) {
        return ResponseEntity.ok(materialService.updateMaterial(id, entity));
    }
    
    @DeleteMapping("/material/{id}")
    public ResponseEntity<MaterialDto> deleteMaterial(@PathVariable Long id) {
        return ResponseEntity.ok(materialService.deleteMaterial(id));
    }
}
