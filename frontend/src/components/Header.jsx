import React, { useState, useEffect } from "react";
// 💡 1. Importe o 'Link' do react-router-dom
import { useNavigate, Link } from "react-router-dom";
import styles from "./header.module.css";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8080/api";

export default function Header() {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const username = localStorage.getItem("username") || "guest@example.com";
    fetch(`${API_BASE}/cart?username=${encodeURIComponent(username)}`)
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => setCartCount(Array.isArray(data) ? data.length : 0))
      .catch(() => setCartCount(0));

    function onCartUpdated() {
      const username = localStorage.getItem("username") || "guest@example.com";
      fetch(`${API_BASE}/cart?username=${encodeURIComponent(username)}`)
        .then((res) => (res.ok ? res.json() : []))
        .then((data) => setCartCount(Array.isArray(data) ? data.length : 0))
        .catch(() => setCartCount(0));
    }

    window.addEventListener("cartUpdated", onCartUpdated);
    return () => window.removeEventListener("cartUpdated", onCartUpdated);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const params = new URLSearchParams();

    if (q) {
      params.append("q", q);
    }
    if (category) {
      params.append("category", category);
    }

    navigate(`/?${params.toString()}`);
  }

  return (
    <header className="site-header">
      <div className="topbar">
        <div className={styles.logo}>
          <Link to="/">RePlayce</Link>
        </div>
        <form className="search-form" onSubmit={handleSubmit}>
          {/* O dropdown de pesquisa (corrigido) */}
          <select
            className="category"
            aria-label="Categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Todos</option>
            <option value="vitrola">Vitrolas</option>
            <option value="disco">Discos</option>
            <option value="acessorio">Acessórios</option>
          </select>

          <input
            className="search-input"
            placeholder="Pesquise seu produto favorito..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <button className="search-btn" type="submit">
            🔍
          </button>
        </form>
        <div
          className="icons"
          style={{ display: "flex", gap: "12px", alignItems: "center" }}
        >
          <Link to="/favorites" aria-label="Favoritos">
            ❤️ Favoritos
          </Link>
          <Link
            to="/cart"
            aria-label="Carrinho"
            style={{ display: "flex", alignItems: "center", gap: 6 }}
          >
            🛒 <span style={{ fontSize: "0.9rem" }}>{cartCount}</span>
          </Link>
          <Link to="/profile" aria-label="Perfil">
            👤
          </Link>
        </div>
      </div>

      {/* 💡 2. A <nav> FOI ATUALIZADA */}
      {/* Substituímos <li> por <Link> e definimos a URL de destino com o filtro */}
      <nav className="main-nav">
        <ul className={styles.navbar}>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/?category=vitrola">VITROLAS</Link>
          </li>
          <li>
            <Link to="/?category=disco">DISCOS</Link>
          </li>
          <li>
            <Link to="/?category=acessorio">ACESSÓRIOS</Link>
          </li>
          <li>
            {/* Você mencionou "Ofertas". Se 'oferta' for uma categoria, use: */}
            {/* <Link to="/?category=oferta">OFERTAS</Link> */}
            {/* Se for uma página diferente, use: */}
            <Link to="/ofertas">OFERTAS</Link>
          </li>
          {/* O item "LOTES" foi removido pois não estava na sua última versão, 
             mas você pode adicionar de volta:
          <li>
             <Link to="/?category=lote">LOTES</Link>
          </li> 
          */}
        </ul>
      </nav>
    </header>
  );
}
