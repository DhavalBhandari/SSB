import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </div>
  );
};

export default Navbar;
