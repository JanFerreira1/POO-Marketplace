package com.replayce.controller;

import com.replayce.model.Produto;
import com.replayce.service.ProdutoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:3000") // Permite requisições vindas do endereço padrão do React
@RestController
//Define o prefixo da URL para todos os métodos deste controller
@RequestMapping("/api/produtos")
public class ProdutoController {

    private final ProdutoService produtoService;

    //Injeção de Dependência (Spring cuida de criar e fornecer o Service)
    public ProdutoController(ProdutoService produtoService) {
        this.produtoService = produtoService;
    }
    // Define o método HTTP GET para a URL /api/produtos
    @GetMapping 
    public List<Produto> listarProdutos() {
        // Chama o serviço que retorna a lista em memória
        return produtoService.listarTodos();
    }
    // Define o método HTTP GET para a URL /api/produtos/{id}, onde {id} é uma variável
    @GetMapping("/{id}")
    public ResponseEntity<Produto> buscarPorId(@PathVariable Long id) {
        
        Optional<Produto> produto = produtoService.buscarPorId(id);

        // Verifica se o produto foi encontrado
        if (produto.isPresent()) {
            // Se encontrou, retorna o produto com status HTTP 200 (OK)
            return ResponseEntity.ok(produto.get());
        } else {
            // Se não encontrou, retorna status HTTP 404 (Not Found)
            return ResponseEntity.notFound().build();
        }
    }
}