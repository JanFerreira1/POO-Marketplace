import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8080/api";

export default function Cart() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const username = localStorage.getItem("username") || "guest@example.com";

  useEffect(() => {
    fetchCart();
    // update on external event
    function onCartUpdated() {
      fetchCart();
    }
    window.addEventListener("cartUpdated", onCartUpdated);
    return () => window.removeEventListener("cartUpdated", onCartUpdated);
  }, [username]);

  function fetchCart() {
    setLoading(true);
    fetch(`${API_BASE}/cart?username=${encodeURIComponent(username)}`)
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => setItems(Array.isArray(data) ? data : []))
      .catch(() => setItems([]))
      .finally(() => setLoading(false));
  }

  function removeItem(productId) {
    fetch(
      `${API_BASE}/cart?username=${encodeURIComponent(
        username
      )}&productId=${productId}`,
      { method: "DELETE" }
    )
      .then((res) => {
        if (!res.ok) throw new Error("remove failed");
        // atualizar local
        setItems((prev) => prev.filter((p) => p.id !== productId));
        window.dispatchEvent(new Event("cartUpdated"));
      })
      .catch(() => alert("Não foi possível remover o item"));
  }

  const subtotal = items.reduce((s, p) => s + (p.price || 0), 0);

  return (
    <div>
      <h1>Meu Carrinho</h1>
      <p>
        Usuário: <strong>{username}</strong>
      </p>

      {loading ? (
        <p>Carregando...</p>
      ) : items.length === 0 ? (
        <p>
          Seu carrinho está vazio. <Link to="/">Ir às compras</Link>
        </p>
      ) : (
        <div>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left" }}>Produto</th>
                <th>Preço</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map((p) => (
                <tr key={p.id} style={{ borderTop: "1px solid #eee" }}>
                  <td style={{ padding: "12px 8px" }}>
                    <div
                      style={{ display: "flex", gap: 12, alignItems: "center" }}
                    >
                      <img
                        src={p.imageUrl || "https://via.placeholder.com/80"}
                        alt={p.title}
                        style={{ width: 80 }}
                      />
                      <div>
                        <div style={{ fontWeight: 600 }}>{p.title}</div>
                        <div style={{ fontSize: "0.9rem", color: "#666" }}>
                          {p.artist}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    R$ {p.price?.toFixed(2)}
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <button
                      onClick={() => removeItem(p.id)}
                      style={{
                        background: "transparent",
                        border: "1px solid #ccc",
                        padding: "6px 10px",
                        cursor: "pointer",
                      }}
                    >
                      Remover
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ marginTop: 16, textAlign: "right" }}>
            <strong>Subtotal: R$ {subtotal.toFixed(2)}</strong>
          </div>
        </div>
      )}
    </div>
  );
}
