import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  if (!product) return null

  return (
    <div className="product-card">
      <img
        src={product.imageUrl || 'https://via.placeholder.com/300'}
        alt={product.title}
      />
      <div className="product-info">
        <h3>{product.title}</h3>
        <p className="artist">{product.artist} • {product.yearRelease}</p>
        <p className="price">R$ {product.price?.toFixed(2)}</p>
        <Link className="btn" to={`/product/${product.id}`}>Ver detalhes</Link>
      </div>
    </div>
  )
}
