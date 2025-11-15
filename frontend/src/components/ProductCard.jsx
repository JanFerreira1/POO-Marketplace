import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const [isFavorited, setIsFavorited] = useState(false);

  const username = localStorage.getItem("username") || "guest@example.com";
  const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8080/api";

  useEffect(() => {
    if (!product) return;
    let mounted = true;
    // Verifica se são os produtos favoritos
    fetch(`${API_BASE}/favorites?username=${encodeURIComponent(username)}`)
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => {
        if (!mounted) return;
        // data é uma lista de produtos
        const found =
          Array.isArray(data) && data.some((p) => p.id === product.id);
        setIsFavorited(!!found);
      })
      .catch(() => {
        // falha silenciosa
      });
    return () => {
      mounted = false;
    };
  }, [product?.id, username]);

  function toggleFavorite() {
    if (!product) return;
    if (isFavorited) {
      fetch(
        `${API_BASE}/favorites?username=${encodeURIComponent(
          username
        )}&productId=${product.id}`,
        {
          method: "DELETE",
        }
      )
        .then(() => setIsFavorited(false))
        .catch(() => {});
    } else {
      fetch(`${API_BASE}/favorites`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, productId: product.id }),
      })
        .then(() => setIsFavorited(true))
        .catch(() => {});
    }
  }

  if (!product) return null;

  return (
    <div className="product-card">
      <img
        src={product.imageUrl || "https://via.placeholder.com/300"}
        alt={product.title}
      />
      <div className="product-info">
        <h3>{product.title}</h3>
        <p className="artist">
          {product.artist} • {product.yearRelease}
        </p>
        <p className="price">R$ {product.price?.toFixed(2)}</p>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <Link className="btn" to={`/product/${product.id}`}>
            Ver detalhes
          </Link>
          <button
            aria-label={
              isFavorited ? "Remover dos favoritos" : "Adicionar aos favoritos"
            }
            onClick={toggleFavorite}
            style={{
              border: "none",
              background: "transparent",
              fontSize: "1.4rem",
              cursor: "pointer",
            }}
          >
            {isFavorited ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
    </div>
  );
}
