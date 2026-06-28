package com.example.demo.model.entity;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;

@Table(name = "items")
@Entity
public class Item {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", length = 50)
    private String name;
    
    @Column(name = "icon_path", length = 100)
    private String iconPath;

    @ManyToMany
    @JoinTable(
        name = "item_categories",
        joinColumns = @JoinColumn(name = "item_id"),
        inverseJoinColumns = @JoinColumn(name = "category_id")
    )
    private List<Category> categories;

    @ManyToMany
    @JoinTable(
        name = "item_materials",
        joinColumns = @JoinColumn(name = "item_id"),
        inverseJoinColumns = @JoinColumn(name = "material_id")
    )
    private List<Material> materials;

    @Column(name = "price")
    private Integer price;

    public Item(
        Long id,
        String name,
        String iconPath,
        List<Category> categories,
        List<Material> materials,
        Integer price
    ) {
    this.id = id;
    this.name = name;
    this.iconPath = iconPath;
    this.categories = categories;
    this.materials = materials;
    this.price = price;
}

    public Item () {}

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
    
    public void setIconPath(String iconPath) {
        this.iconPath = iconPath;
    }
    public String getIconPath() {
        return this.iconPath;
    }
    
    public void setPrice(Integer price) {
        this.price = price;
    }
    public Integer getPrice() {
        return this.price;
    }

    public void setCategories (List<Category> categories) {
        this.categories = categories;
    }
    public List<Category> getCategories() {
        return this.categories;
    }

    public void setMaterials(List<Material> materials) {
        this.materials = materials;
    }
    public List<Material> getMaterials() {
        return this.materials;
    }

}
