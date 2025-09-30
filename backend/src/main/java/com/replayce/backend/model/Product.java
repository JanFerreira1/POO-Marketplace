package com.replayce.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String artist;
    private Integer yearRelease;
    private String conditionState; // novo/ótimo/ruim
    private Double price;

    @Column(length = 2000)
    private String description;

    private String category; // disco, vitrola, fita, cd, acessório
    private String imageUrl;

    public Product() {}

    public Product(String title, String artist, Integer yearRelease, String conditionState,
                   Double price, String description, String category, String imageUrl) {
        this.title = title;
        this.artist = artist;
        this.yearRelease = yearRelease;
        this.conditionState = conditionState;
        this.price = price;
        this.description = description;
        this.category = category;
        this.imageUrl = imageUrl;
    }

    // Getters e Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getArtist() { return artist; }
    public void setArtist(String artist) { this.artist = artist; }

    public Integer getYearRelease() { return yearRelease; }
    public void setYearRelease(Integer yearRelease) { this.yearRelease = yearRelease; }

    public String getConditionState() { return conditionState; }
    public void setConditionState(String conditionState) { this.conditionState = conditionState; }

    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
}
