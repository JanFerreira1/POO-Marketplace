import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const [q, setQ] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    // navegar para home com query param (Home faz o filtro)
    navigate(`/?q=${encodeURIComponent(q)}`)
  }

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="logo">RePlayce</div>
        <form className="search-form" onSubmit={handleSubmit}>
          <select className="category" aria-label="Categoria">
            <option value="">Todos</option>
            <option value="vitrola">Vitrolas</option>
            <option value="disco">Discos</option>
            <option value="acessorio">Acessórios</option>
          </select>
          <input
            className="search-input"
            placeholder="Pesquise seu disco favorito..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <button className="search-btn" type="submit">🔍</button>
        </form>
        <div className="icons">👤 🛒</div>
      </div>

      <nav className="main-nav">
        <ul>
          <li>GÊNERO</li>
          <li>VITROLAS</li>
          <li>LOTES</li>
          <li>OFERTAS</li>
        </ul>
      </nav>
    </header>
  )
}
