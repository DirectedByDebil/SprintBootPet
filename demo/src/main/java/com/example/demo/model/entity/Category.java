package com.example.demo.model.entity;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;

@Table(name = "categories")
@Entity
public class Category {
    
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", length = 50)
    private String name;
    
    @Column(name = "style_preset", length = 50)
    private String stylePreset;

    public Category (Long id, String name, String stylePreset) {
        this.id = id;
        this.name = name;
        this.stylePreset = stylePreset;
    }

    public Category () {}

    @ManyToMany(mappedBy = "categories")
    private List<Item> items;

    public void setId(long id) {
        this.id = id;
    }
    public Long getId() {
        return this.id;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    public String getName() {
        return this.name;
    }
    
    public void setStylePreset(String stylePreset) {
        this.stylePreset = stylePreset;
    }
    public String getStylePreset() {
        return this.stylePreset;
    }
}
