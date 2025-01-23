import React from "react";
import { useCart } from "../context/CartContenxt";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, totalItems, totalPrice } = useCart();

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Nothing in Cart</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} height={"250px"}/>
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <p>
                  Quantity:
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  {item.quantity}
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <p>Total Items: {totalItems()}</p>
            <p>Total Price: ${totalPrice().toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
