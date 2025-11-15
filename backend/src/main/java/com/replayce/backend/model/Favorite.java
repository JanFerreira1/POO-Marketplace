package com.replayce.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "favorites")
public class Favorite {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String username; // identificador do usuário (email ou nome)

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    public Favorite() {}

    public Favorite(String username, Product product) {
        this.username = username;
        this.product = product;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public Product getProduct() { return product; }
    public void setProduct(Product product) { this.product = product; }
}
