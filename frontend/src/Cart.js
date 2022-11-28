import { createContext, useState } from "react";
import { arrayProducts, getProductData } from "./Products";

export const Cart = createContext({
  items: [],
  getQuantity: () => {},
  addItem: () => {},
  removeItem: () => {},
  deleteItem: () => {},
  getTotal: () => {},
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  function getQuantity(id) {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  function addItem(id) {
    const quantity = getQuantity(id);

    if (quantity === 0) {
      setCartProducts([...cartProducts, { id: id, quantity: 1 }]);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id ? { ...product, quantity: quantity + 1 } : product
        )
      );
    }
  }

  function removeItem(id) {
    const quantity = getQuantity(id);

    if (quantity === 1) {
      deleteItem(id);
    } else {
      setCartProducts((cartProducts) =>
        cartProducts.map((product) =>
          product.id === id ? { ...product, quantity: quantity - 1 } : product
        )
      );
    }
  }

  function deleteItem(id) {
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => currentProduct.id !== id)
    );
  }

  function getTotal() {
    let total = 0;

    cartProducts.map((cartItem) => {
      const productData = getProductData(cartItem.id);
      total += productData.price * cartItem.quantity;
    });

    return total;
  }

  const contextValue = {
    items: cartProducts,
    getQuantity,
    addItem,
    removeItem,
    deleteItem,
    getTotal,
  };
  return <Cart.Provider value={contextValue}>{children}</Cart.Provider>;
}

export default CartProvider;
