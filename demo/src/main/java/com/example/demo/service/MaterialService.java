package com.example.demo.service;

import java.util.List;

import com.example.demo.model.dto.MaterialDto;

public interface MaterialService {

    public List<MaterialDto> getMaterials();
    public MaterialDto createMaterial(MaterialDto category);
    public MaterialDto updateMaterial(Long id, MaterialDto item);
    public MaterialDto deleteMaterial(Long id);
}
