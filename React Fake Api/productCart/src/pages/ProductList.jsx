import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from "react-toastify"
import { useCart } from '../context/CartContenxt'
import axios from "axios"

const ProductList = () => {
    const [products,setProducts]=useState([])
    const {addToCart}= useCart()

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products?limit=30").
        then((response)=>setProducts(response.data)).
        catch((error)=>console.log("Error fetching Products:",error))
    })

    const msgForCart= (product) => {
        toast.success(`${product.title} added to cart!`);
        addToCart(product);
      };

  return (
    <div className="product-list">
      <h1>Product List</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => msgForCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  )
}

export default ProductList
