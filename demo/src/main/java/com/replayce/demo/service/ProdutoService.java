package com.replayce.demo.service;

import com.replayce.demo.model.Produto;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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
            "Clássico de 1969, incluindo 'Come Together'. Álbum de rock e pop.",
            new BigDecimal("150.99"),
            "http://localhost:8080/imagens/abbeyroad.jpg",
            "Disco"
        ));
        PRODUTOS_MOCK.add(new Produto(
            nextId++,
            "Vitrola Cruiser Plus",
            "Crosley",
            "Portátil e moderna, com bluetooth. Equipamento eletrônico de alta fidelidade.",
            new BigDecimal("699.00"),
            "http://localhost:8080/imagens/crosley.jpg",
            "Vitrola"
        ));
        PRODUTOS_MOCK.add(new Produto(
            nextId++,
            "Rumours",
            "Fleetwood Mac",
            "Um dos álbuns mais vendidos de todos os tempos. Clássico do rock.",
            new BigDecimal("120.50"),
            "http://localhost:8080/imagens/rumours.jpg",
            "Disco"
        ));
        PRODUTOS_MOCK.add(new Produto(
            nextId++,
            "Vitrola Maleta Vintage",
            "RCA",
            "Design retrô elegante, perfeita para colecionadores.",
            new BigDecimal("850.00"),
            "http://localhost:8080/imagens/rca.jpg",
            "Vitrola"
        ));
    }

    public List<Produto> listarTodos() {
        return PRODUTOS_MOCK;
    }
    
    public Optional<Produto> buscarPorId(Long id) {
        return PRODUTOS_MOCK.stream()
                            .filter(p -> p.getId().equals(id))
                            .findFirst();
    }

    /**
     * Busca produtos cujo nome, artista/fabricante ou descrição contenha o termo de busca.
     * @param termo O texto a ser procurado.
     * @return Lista de produtos filtrados.
     */
    public List<Produto> buscarPorTermo(String termo) {
        if (termo == null || termo.trim().isEmpty()) {
            return listarTodos();
        }

        final String termoLowerCase = termo.toLowerCase().trim();

        return PRODUTOS_MOCK.stream()
            .filter(produto -> 
                produto.getNome().toLowerCase().contains(termoLowerCase) ||
                produto.getArtistaOuFabricante().toLowerCase().contains(termoLowerCase) ||
                produto.getDescricaoCurta().toLowerCase().contains(termoLowerCase))
            .collect(Collectors.toList());
    }
}
