package com.replayce.backend.service;

import com.replayce.backend.model.Favorite;
import com.replayce.backend.model.Product;
import com.replayce.backend.repository.FavoriteRepository;
import com.replayce.backend.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavoriteService {
    private final FavoriteRepository favoriteRepo;
    private final ProductRepository productRepo;

    public FavoriteService(FavoriteRepository favoriteRepo, ProductRepository productRepo) {
        this.favoriteRepo = favoriteRepo;
        this.productRepo = productRepo;
    }

    public List<Favorite> findByUsername(String username) {
        return favoriteRepo.findByUsername(username);
    }

    public Favorite addFavorite(String username, Long productId) {
        Product p = productRepo.findById(productId).orElseThrow(() -> new IllegalArgumentException("Product not found"));
        // if already exists, return existing
        return favoriteRepo.findByUsernameAndProduct_Id(username, productId).orElseGet(() -> favoriteRepo.save(new Favorite(username, p)));
    }

    public void removeFavorite(String username, Long productId) {
        favoriteRepo.findByUsernameAndProduct_Id(username, productId).ifPresent(favoriteRepo::delete);
    }
}
