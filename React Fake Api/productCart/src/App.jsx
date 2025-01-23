import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './pages/ProductList'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import '../src/styles.css'
import CartPage from './pages/CartPage'
import { CartProvider } from "./context/CartContenxt"
import Navbar from './component/Navbar'


function App() {

  return (
    <CartProvider>
    <Router>
      <Navbar />
    <Routes>
      <Route path="/products" element={<ProductList />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  </Router>
  </CartProvider>
  )
}

export default App
