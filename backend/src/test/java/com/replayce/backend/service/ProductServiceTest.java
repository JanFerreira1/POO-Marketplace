package com.replayce.backend.service;

import com.replayce.backend.model.Product;
import com.replayce.backend.repository.ProductRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import java.util.Optional;
//import java.util.Arrays;
//import java.util.List;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;


@ExtendWith(MockitoExtension.class)
class ProductServiceTest {

    @InjectMocks
    private ProductService productService;

    @Mock
    private ProductRepository productRepository;
    private Product productStub;

    @BeforeEach
    void setUp() {
        productStub = new Product("Album Title", "Artist Name", 2020, "New", 19.99, "Description", "Category", "imageUrl");
        productStub.setId(1L);
    }

    @Test
    void findById_ShouldReturnProduct_WhenProductExists() {
        when(productRepository.findById(1L)).thenReturn(Optional.of(productStub));

        Optional<Product> foundProduct = productService.findById(1L);

        assertThat(foundProduct).isPresent();
        assertThat(foundProduct.get()).isEqualTo(productStub);
        verify(productRepository, times(1)).findById(1L);
    }
    @Test
    void findById_ShouldReturnEmpty_WhenProductDoesNotExist() {
        when(productRepository.findById(2L)).thenReturn(Optional.empty());

        Optional<Product> foundProduct = productService.findById(2L);

        assertThat(foundProduct).isNotPresent();
        verify(productRepository, times(1)).findById(2L);
    }
}
