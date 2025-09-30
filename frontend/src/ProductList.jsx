import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const API_BASE_URL = 'http://localhost:8080/api/produtos';

const ProductList = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //Armazena o texto digitado pelo usuário
  const [searchTerm, setSearchTerm] = useState('');

  // Aceita um termo e ajusta a URL
  const fetchProdutos = (termo = '') => {
    setLoading(true);
    setError(null);
    
    // Constrói a URL: usa ?termo=busca se houver um termo
    const url = termo ? `${API_BASE_URL}?termo=${termo}` : API_BASE_URL;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erro HTTP: ${response.status}. Backend inativo?`);
        }
        return response.json();
      })
      .then(data => {
        setProdutos(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  };

  // Efeito inicial: carrega todos os produtos na montagem
  useEffect(() => {
    fetchProdutos();
  }, []);

  //Chama a função de busca quando o botão é clicado
  const handleSearch = (e) => {
    e.preventDefault(); // Impede o recarregamento padrão da página
    fetchProdutos(searchTerm);
  };

  if (loading) return <div style={{ padding: '20px' }}>Carregando catálogo...</div>;
  if (error) return <div style={{ padding: '20px', color: 'red' }}>Erro ao carregar dados: {error}</div>;

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Vitrine de Produtos Replayce</h1>
      
      <form onSubmit={handleSearch} style={searchFormStyle}>
        <input
          type="text"
          placeholder="Buscar por nome, artista ou fabricante..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Atualiza o estado searchTerm
          style={searchInputStyle}
        />
        <button type="submit" style={searchButtonStyle}>Buscar</button>
      </form>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px', maxWidth: '1200px', margin: '20px auto' }}>
        {produtos.length === 0 && (
          <p style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#888' }}>
            Nenhum produto encontrado para "{searchTerm}".
          </p>
        )}
        {produtos.map(produto => (
          <div key={produto.id} style={cardStyle}>
            <Link to={`/produtos/${produto.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img 
                src={produto.urlImagem || 'https://placehold.co/220x150/007bff/ffffff?text=Produto+Replayce'} 
                alt={produto.nome} 
                style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px 4px 0 0' }} 
              />
              <div style={{ padding: '15px' }}>
                <h3 style={{ margin: '0 0 5px 0', fontSize: '1.1em' }}>{produto.nome}</h3>
                <p style={{ margin: '0 0 10px 0', color: '#666' }}>{produto.artistaOuFabricante}</p>
                <p style={{ fontWeight: 'bold', color: '#28a745', fontSize: '1.2em' }}>
                  R$ {produto.preco ? produto.preco.toFixed(2).replace('.', ',') : '0,00'}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

// Estilos
const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
    transition: 'transform 0.2s',
    backgroundColor: 'white',
    textAlign: 'left',
    overflow: 'hidden'
};

const searchFormStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px',
    gap: '10px'
};

const searchInputStyle = {
    padding: '10px 15px',
    fontSize: '1em',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '400px',
    maxWidth: '80%'
};

const searchButtonStyle = {
    padding: '10px 15px',
    fontSize: '1em',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
};

export default ProductList;
