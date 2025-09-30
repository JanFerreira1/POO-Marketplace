package com.replayce.demo.model;
import com.replayce.demo.model.Produto;

import java.math.BigDecimal;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class Produto {

    private Long id;
    private String nome;
    private String artistaOuFabricante;
    private String descricaoCurta;
    private BigDecimal preco;
    private String urlImagem;
    private String categoria;

    public Produto() {
    }
}