package com.replayce.backend.controller;

import com.replayce.backend.model.CartItem;
import com.replayce.backend.service.CartService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin(origins = "*")
public class CartController {
    private final CartService service;

    public CartController(CartService service) {
        this.service = service;
    }

    @GetMapping
    public List<?> listCart(@RequestParam("username") String username) {
        return service.findByUsername(username).stream().map(CartItem::getProduct).collect(Collectors.toList());
    }

    @PostMapping("/add")
    public ResponseEntity<CartItem> addToCart(@RequestBody Map<String, Object> body) {
        String username = (String) body.get("username");
        Number pid = (Number) body.get("productId");
        if (username == null || pid == null) return ResponseEntity.badRequest().build();
        CartItem c = service.addToCart(username, pid.longValue());
        return ResponseEntity.ok(c);
    }

    @DeleteMapping
    public ResponseEntity<Void> removeFromCart(@RequestParam("username") String username, @RequestParam("productId") Long productId) {
        service.removeFromCart(username, productId);
        return ResponseEntity.noContent().build();
    }
}
