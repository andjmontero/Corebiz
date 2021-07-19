import React, { useContext, useState, createContext } from "react";

const CartContext = createContext();

export function UseCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  function AddToCart(obj) {
    let productsOnCart = [];
    if (localStorage.getItem("productsOnCart")) {
      productsOnCart = JSON.parse(localStorage.getItem("productsOnCart"));
    }
    let productClicked = productsOnCart.find(
      (product) => product.productId === obj.productId
    );

    if (productClicked === undefined) {
      productsOnCart.push(obj);
      localStorage.setItem("productsOnCart", JSON.stringify(productsOnCart));
    }
    setCart([...cart, obj]);
  }

  return (
    <CartContext.Provider value={{ cart, AddToCart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
