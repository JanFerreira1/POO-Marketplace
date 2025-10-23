import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const API = import.meta.env.VITE_API_URL || 'http://localhost:8080/api/products'

export default function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    // Primeiro tenta buscar por id direto (se seu backend tiver GET /products/{id})
    fetch(`${API}/${id}`)
      .then(res => {
        if (res.ok) return res.json()
        throw new Error('not-found')
      })
      .then(data => setProduct(data))
      .catch(() => {
        // fallback: busca todos e filtra no cliente
        fetch(API)
          .then(r => r.json())
          .then(list => {
            const found = list.find(p => String(p.id) === String(id))
            setProduct(found || null)
          })
      })
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <p>Carregando...</p>
  if (!product) return <p>Produto não encontrado.</p>

  return (
    <div className="product-detail">
      <img src={product.imageUrl || 'https://via.placeholder.com/400'} alt={product.title} />
      <div className="detail-info">
        <h2>{product.title}</h2>
        <p className="artist">{product.artist} • {product.yearRelease}</p>
        <p className="price">R$ {product.price?.toFixed(2)}</p>
        <p>{product.description}</p>
        <p><strong>Categoria:</strong> {product.category}</p>
        <button className="buy-btn">Adicionar ao carrinho</button>
      </div>
    </div>
  )
}
