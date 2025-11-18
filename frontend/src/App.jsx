import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import "./App.css";

export default function App() {
  return (
    <div>
      <Header />
      <main style={{ padding: "20px", maxWidth: 1200, margin: "0 auto" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  );
}
