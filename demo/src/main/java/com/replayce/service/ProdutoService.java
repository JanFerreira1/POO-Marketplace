package com.replayce.service;

import com.replayce.model.Produto;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProdutoService {

    private static final List<Produto> PRODUTOS_MOCK = new ArrayList<>();
    private static Long nextId = 1L;

    // Bloco estático para popular a lista ao iniciar
    static {
        PRODUTOS_MOCK.add(new Produto(
            nextId++,
            "Abbey Road",
            "The Beatles",
            "Clássico de 1969, incluindo 'Come Together'.",
            new BigDecimal("150.99"),
            "http://localhost:8080/imagens/abbeyroad.jpg",
            "Disco"
        ));
        PRODUTOS_MOCK.add(new Produto(
            nextId++,
            "Vitrola Cruiser Plus",
            "Crosley",
            "Portátil e moderna, com bluetooth.",
            new BigDecimal("699.00"),
            "http://localhost:8080/imagens/crosley.jpg",
            "Vitrola"
        ));
        // ... (adicione mais produtos aqui se quiser)
    }

    public List<Produto> listarTodos() {
        return PRODUTOS_MOCK;
    }
    
    public Optional<Produto> buscarPorId(Long id) {
        return PRODUTOS_MOCK.stream()
                            .filter(p -> p.getId().equals(id))
                            .findFirst();
    }
}