import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL || "http://localhost:8080/api/products";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`${API}/${id}`) 
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("not-found");
      })
      .then((data) => setProduct(data))
      .catch((err) => {
        console.error("Erro ao buscar produto:", err);
        setProduct(null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  // --- 💡 NOVA LÓGICA DE CORREÇÃO DA IMAGEM ---
  let imagePath = product?.imageUrl; 

  // Se o caminho existir, NÃO começar com 'http' E NÃO começar com '/'
  if (imagePath && !imagePath.startsWith('http') && !imagePath.startsWith('/')) {
    
    // Se começar com './' (ex: ./img/elis.jpg), remove o './'
    if (imagePath.startsWith('./')) {
      imagePath = imagePath.substring(2); // vira 'img/elis.jpg'
    }
    
    // Adiciona a barra '/' no início
    imagePath = `/${imagePath}`; // vira '/img/elis.jpg'
  }
  // --- Fim da Lógica de Correção ---

  if (loading)
    return <p className="loading-text">Carregando...</p>;
  if (!product)
    return <p className="error-text">Produto não encontrado.</p>;

  return (
    <div className="product-detail-container">
      
      <button
        onClick={() => navigate(-1)}
        className="btn-voltar" 
      >
        Voltar
      </button>

      <div className="product-layout-box">
        
        <img
          // 💡 CORREÇÃO APLICADA: Usa a variável 'imagePath' corrigida
          src={imagePath || "https://via.placeholder.com/400"}
          alt={product.title}
          onError={(e) => (e.target.src = "https://via.placeholder.com/400")}
          className="imagem-detalhe" 
        />

        <div className="product-info-col">
          <h2>{product.title}</h2>
          
          {/* Lógica condicional (Já estava correta) */}
          {product.artist && (
            <p className="artist-subline">
              {product.artist}
              {product.yearRelease ? ` • ${product.yearRelease}` : ''}
            </p> 
          )}

          <p className="price">
            R$ {product.price?.toFixed(2)}
          </p>

          <p className="description">{product.description}</p>

          <p className="meta-info">
            <strong>Categoria:</strong> {product.category}
          </p>
          
          <p className="meta-info">
            <strong>Condição:</strong> {product.conditionState}
          </p>

          <button 
            className="botao-detalhes" 
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
}