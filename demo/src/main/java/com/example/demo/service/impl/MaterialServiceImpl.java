package com.example.demo.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.model.dto.MaterialDto;
import com.example.demo.model.entity.Material;
import com.example.demo.repository.MaterialRepository;
import com.example.demo.service.MaterialService;

@Service
public class MaterialServiceImpl implements MaterialService {
    
    private MaterialRepository materialRepository;

    public MaterialServiceImpl (MaterialRepository materialRepository) {
        this.materialRepository = materialRepository;
    }

    @Override
    public List<MaterialDto> getMaterials() {

        List<Material> all = materialRepository.findAll();

        if (all.isEmpty()) {
            throw new RuntimeException("No materials found");
        }

        return all.stream()
            .map(this::toDto)
            .toList();
    }

    @Override
    public MaterialDto createMaterial(MaterialDto material) {

        Material entity = new Material(
            null,
            material.name(),
            material.stylePreset()
        );

        Material saved = materialRepository.save(entity);
        return toDto(saved);
    }

    @Override
    public MaterialDto updateMaterial(Long id, MaterialDto material) {

        Material entity = materialRepository
            .findById(id)
            .orElseThrow();

        entity.setName(material.name());
        entity.setStylePreset(material.stylePreset());

        Material saved = materialRepository.save(entity);
        return toDto(saved);
    }
    
    @Override
    public MaterialDto deleteMaterial(Long id) {
        
        Material material = materialRepository
            .findById(id)
            .orElseThrow();
        
        materialRepository.delete(material);
        
        return toDto(material);
    }

    private MaterialDto toDto(Material material) {
        return new MaterialDto(
            material.getId(),
            material.getName(),
            material.getStylePreset()
        );
    }
    
}
