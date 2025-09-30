package com.replayce.demo.controller;

import com.replayce.demo.model.Produto;
import com.replayce.demo.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

// Permite requisições do frontend React/Vite
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5173"}) 
@RestController
@RequestMapping("/api/produtos")
public class ProdutoController {

    @Autowired
    private ProdutoService produtoService;

    /**
     * Endpoint que lista todos os produtos ou filtra por termo de busca.
     * Exemplo: GET http://localhost:8080/api/produtos?termo=beatles
     * @param termo Parâmetro opcional de busca.
     * @return Lista de produtos, filtrada ou completa.
     */
    @GetMapping
    public List<Produto> listarOuBuscar(@RequestParam(required = false) String termo) {
        // Se o termo de busca for fornecido, usa o método de busca.
        if (termo != null && !termo.trim().isEmpty()) {
            return produtoService.buscarPorTermo(termo);
        }
        // Caso contrário, lista todos os produtos.
        return produtoService.listarTodos();
    }

    /**
     * Endpoint para buscar um produto pelo ID.
     * Exemplo: GET http://localhost:8080/api/produtos/1
     * @param id O ID do produto.
     * @return O produto correspondente ou 404.
     */
    @GetMapping("/{id}")
    public ResponseEntity<Produto> buscarPorId(@PathVariable Long id) {
        Optional<Produto> produto = produtoService.buscarPorId(id);
        return produto.map(ResponseEntity::ok)
                      .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
