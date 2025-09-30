package com.replayce.backend.repository;

import com.replayce.backend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByTitleContainingIgnoreCaseOrArtistContainingIgnoreCase(String title, String artist);
    List<Product> findByCategoryIgnoreCase(String category);
}
