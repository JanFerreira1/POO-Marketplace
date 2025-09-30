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

    // construtor rápido
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

    // Getters e Setters (precisa pra funcionar)
    // Gere na sua IDE com botão direito → Generate → Getters and Setters
}
