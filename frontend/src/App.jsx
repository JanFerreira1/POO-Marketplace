import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProductList />} /> 
          <Route path="/produtos/:id" element={<ProductDetail />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;