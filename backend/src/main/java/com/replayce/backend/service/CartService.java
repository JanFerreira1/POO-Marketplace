package com.replayce.backend.service;

import com.replayce.backend.model.CartItem;
import com.replayce.backend.model.Product;
import com.replayce.backend.repository.CartItemRepository;
import com.replayce.backend.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {
    private final CartItemRepository cartRepo;
    private final ProductRepository productRepo;

    public CartService(CartItemRepository cartRepo, ProductRepository productRepo) {
        this.cartRepo = cartRepo;
        this.productRepo = productRepo;
    }

    public List<CartItem> findByUsername(String username) {
        return cartRepo.findByUsername(username);
    }

    public CartItem addToCart(String username, Long productId) {
        Product p = productRepo.findById(productId).orElseThrow(() -> new IllegalArgumentException("Product not found"));
        // if already in cart, return existing
        return cartRepo.findByUsernameAndProduct_Id(username, productId).orElseGet(() -> cartRepo.save(new CartItem(username, p)));
    }

    public void removeFromCart(String username, Long productId) {
        cartRepo.findByUsernameAndProduct_Id(username, productId).ifPresent(cartRepo::delete);
    }
}
