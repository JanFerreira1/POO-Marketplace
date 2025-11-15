import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8080/api";

export default function Favorites() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const username = localStorage.getItem("username") || "guest@example.com";

  useEffect(() => {
    setLoading(true);
    fetch(`${API_BASE}/favorites?username=${encodeURIComponent(username)}`)
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => {
        setProducts(Array.isArray(data) ? data : []);
      })
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, [username]);

  return (
    <div>
      <h1>Meus Favoritos</h1>
      <p>
        Usuário: <strong>{username}</strong>
      </p>

      {loading ? (
        <p>Carregando favoritos...</p>
      ) : products.length === 0 ? (
        <p>Você ainda não adicionou produtos aos seus favoritos.</p>
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
