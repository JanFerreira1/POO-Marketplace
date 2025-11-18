package com.replayce.backend.repository;

import com.replayce.backend.model.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
    List<CartItem> findByUsername(String username);
    Optional<CartItem> findByUsernameAndProduct_Id(String username, Long productId);
}
