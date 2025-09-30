import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { useLocation } from 'react-router-dom'

const API = import.meta.env.VITE_API_URL || 'http://localhost:8080/api/products'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export default function Home() {
  const [allProducts, setAllProducts] = useState([])
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const q = useQuery().get('q') || ''

  useEffect(() => {
    setLoading(true)
    fetch(API)
      .then(res => res.json())
      .then(data => {
        setAllProducts(data)
        // aplicar filtro inicial se houver query
        if (q) {
          const filtered = filterProducts(data, q)
          setProducts(filtered)
        } else {
          setProducts(data)
        }
      })
      .catch(err => {
        console.error('Erro carregando produtos:', err)
        setAllProducts([])
        setProducts([])
      })
      .finally(() => setLoading(false))
  }, []) // roda só uma vez, ao montar

  // atualiza quando muda 'q' ou allProducts
  useEffect(() => {
    if (!q) { setProducts(allProducts); return }
    setProducts(filterProducts(allProducts, q))
  }, [q, allProducts])

  return (
    <div>
      <h1>Vitrolas e Discos</h1>
      {q && <p>Resultados para: <strong>{q}</strong></p>}
      {loading ? <p>Carregando...</p> :
        products.length === 0 ? <p>Nenhum produto encontrado.</p> :
        <div className="grid">
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      }
    </div>
  )
}

function filterProducts(list, q) {
  const lower = q.toLowerCase()
  return list.filter(p => {
    if (!p) return false
    return (p.title && p.title.toLowerCase().includes(lower)) ||
           (p.artist && p.artist.toLowerCase().includes(lower)) ||
           (p.category && p.category.toLowerCase().includes(lower)) ||
           (p.yearRelease && String(p.yearRelease).includes(lower))
  })
}
