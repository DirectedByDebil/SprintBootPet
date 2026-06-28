package com.example.demo.model.dto;

public record ItemDto(
    Long id,
    String name,
    String iconPath,
    Long[] categories,
    Long[] materials,
    Integer price
) {}
