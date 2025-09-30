package com.replayce.backend.service;

import com.replayce.backend.model.Product;
import com.replayce.backend.repository.ProductRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    private final ProductRepository repo;

    public ProductService(ProductRepository repo) {
        this.repo = repo;
    }

    public List<Product> findAll() { return repo.findAll(); }
    public Optional<Product> findById(Long id) { return repo.findById(id); }
    public List<Product> search(String q) { return repo.findByTitleContainingIgnoreCaseOrArtistContainingIgnoreCase(q, q); }
    public List<Product> findByCategory(String category) { return repo.findByCategoryIgnoreCase(category); }
    public Product save(Product p) { return repo.save(p); }
}
