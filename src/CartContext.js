import React, { useContext, useState, createContext } from "react";

const CartContext = createContext();

export function UseCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  function AddToCart(obj) {
    obj.amount = 1;
    setCart([...cart, obj]);
  }
  function removeItem(item) {
    setCart(cart.filter((element) => element !== item));
  }

  function addAmount(item) {
    const checkIndex = cart.findIndex(
      (producto) => producto.productId == item.productId
    );
    const newCart = cart.filter(
      (producto) => producto.productId !== item.productId
    );
    item.amount = item.amount + 1;
    newCart.splice(checkIndex, 0, item);
    setCart(newCart);
  }

  function substractAmount(item) {
    if (item.amount > 1) {
      const checkIndex = cart.findIndex(
        (producto) => producto.productId == item.productId
      );
      const newCart = cart.filter(
        (producto) => producto.productId !== item.productId
      );
      item.amount = item.amount - 1;
      newCart.splice(checkIndex, 0, item);
      setCart(newCart);
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        AddToCart,
        setCart,
        addAmount,
        substractAmount,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
