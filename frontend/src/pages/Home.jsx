import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useLocation } from "react-router-dom";

const API =
  import.meta.env.VITE_API_URL || "http://localhost:8080/api/products";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Home() {
  const [allProducts, setAllProducts] = useState([]); // Lista mestra
  const [products, setProducts] = useState([]); // Lista filtrada (exibida)
  const [loading, setLoading] = useState(true);

  // 1. LÊ OS FILTROS DA URL (enviados pelo Header)
  const q = useQuery().get("q") || "";
  const category = useQuery().get("category") || "";

  // Efeito 1: Busca todos os produtos (só uma vez)
  useEffect(() => {
    setLoading(true);
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        // A lista de 'products' será definida no Efeito 2
      })
      .catch((err) => {
        console.error("Erro carregando produtos:", err);
        setAllProducts([]);
      })
      .finally(() => setLoading(false));
  }, []); // Roda só uma vez, ao montar

  // 2. APLICA OS FILTROS DA URL
  // Roda sempre que 'q', 'category' ou a lista mestra mudarem
  useEffect(() => {
    let filteredList = [...allProducts];

    // Passo A: Filtrar por Categoria (se o parâmetro 'category' existir)
    if (category) {
      filteredList = filteredList.filter(
        (p) => p.category && p.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Passo B: Filtrar pela pesquisa 'q' (sobre a lista já filtrada)
    if (q) {
      filteredList = filterProducts(filteredList, q);
    }

    setProducts(filteredList); // Atualiza os produtos exibidos
  }, [q, category, allProducts]); // Depende dos filtros da URL e da lista

  return (
    <div>
      {/*<h1>Produtos</h1>*/}

      {/* 3. SEM DROPDOWN AQUI Apenas exibe os filtros ativos */}
      {q && (
        <p>
          Resultados para: <strong>{q}</strong>
        </p>
      )}
      {category && (
        <p>
          Categoria: <strong>{category}</strong>
        </p>
      )}

      {loading ? (
        <p>Carregando...</p>
      ) : products.length === 0 ? (
        <p>Nenhum produto encontrado.</p>
      ) : (
        <div className="grid">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}

// Sua função de filtro 'q' (Não precisa mudar)
function filterProducts(list, q) {
  const lower = q.toLowerCase();
  return list.filter((p) => {
    if (!p) return false;
    return (
      (p.title && p.title.toLowerCase().includes(lower)) ||
      (p.artist && p.artist.toLowerCase().includes(lower)) ||
      (p.category && p.category.toLowerCase().includes(lower)) ||
      (p.yearRelease && String(p.yearRelease).includes(lower))
    );
  });
}
