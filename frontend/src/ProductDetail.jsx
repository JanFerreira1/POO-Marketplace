import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const API_BASE_URL = 'http://localhost:8080/api/produtos';

const ProductDetail = () => {
  const { id } = useParams(); 
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_BASE_URL}/${id}`) 
      .then(response => {
        if (response.status === 404) {
          throw new Error("Produto não encontrado.");
        }
        if (!response.ok) {
          throw new Error(`Erro de rede: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setProduto(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h2 style={{ padding: '20px' }}>Carregando detalhes...</h2>;
  if (error) return <h2 style={{ padding: '20px', color: 'red' }}>Erro: {error}</h2>;
  if (!produto) return null;

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <Link to="/" style={linkStyle}>← Voltar para o Catálogo</Link>
      <div style={detailContainerStyle}>
        <img 
          src={produto.urlImagem || 'https://via.placeholder.com/400'} 
          alt={produto.nome} 
          style={imageStyle} 
        />
        <div style={infoStyle}>
          <h1>{produto.nome}</h1>
          <p><strong>Fabricante/Artista:</strong> {produto.artistaOuFabricante}</p>
          <p><strong>Categoria:</strong> {produto.categoria}</p>
          <p style={{ marginTop: '20px' }}>{produto.descricaoCurta}</p>
          <h2 style={{color: '#007bff'}}>R$ {produto.preco ? produto.preco.toFixed(2).replace('.', ',') : '0,00'}</h2>
          <button style={buttonStyle}>Adicionar ao Carrinho</button>
        </div>
      </div>
    </div>
  );
};

// Estilos básicos
const linkStyle = { color: '#007bff', textDecoration: 'none', display: 'block', marginBottom: '20px' };
const detailContainerStyle = { display: 'flex', gap: '40px', border: '1px solid #eee', padding: '20px', borderRadius: '8px' };
const imageStyle = { width: '40%', maxHeight: '400px', objectFit: 'cover', borderRadius: '4px' };
const infoStyle = { width: '60%' };
const buttonStyle = { padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' };

export default ProductDetail;