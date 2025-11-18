package com.replayce.backend.controller;

import com.replayce.backend.model.Favorite;
import com.replayce.backend.model.Product;
import com.replayce.backend.service.FavoriteService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/favorites")
@CrossOrigin(origins = "*")
public class FavoriteController {
    private final FavoriteService service;

    public FavoriteController(FavoriteService service) {
        this.service = service;
    }

    // Listar produtos favoritados por username
    @GetMapping
    public List<Product> listFavorites(@RequestParam("username") String username) {
        return service.findByUsername(username).stream().map(Favorite::getProduct).collect(Collectors.toList());
    }

    // Adicionar favorito - body: { "username": "...", "productId": 1 }
    @PostMapping
    public ResponseEntity<Favorite> addFavorite(@RequestBody Map<String, Object> body) {
        String username = (String) body.get("username");
        Number pid = (Number) body.get("productId");
        if (username == null || pid == null) return ResponseEntity.badRequest().build();
        Favorite f = service.addFavorite(username, pid.longValue());
        return ResponseEntity.ok(f);
    }

    // Remover favorito via query params
    @DeleteMapping
    public ResponseEntity<Void> removeFavorite(@RequestParam("username") String username, @RequestParam("productId") Long productId) {
        service.removeFavorite(username, productId);
        return ResponseEntity.noContent().build();
    }
}
