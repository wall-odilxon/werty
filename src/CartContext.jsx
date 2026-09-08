import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext(null);
const CART_KEY = "liber_cart";

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem(CART_KEY) || "[]"); } catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  }, [items]);

  
  const keyOf = (book) => `${book.title}__${book.img}`;

  const addToCart = (book, qty = 1) => {
    setItems(prev => {
      const k = keyOf(book);
      const existing = prev.find(i => keyOf(i) === k);
      if (existing) {
        return prev.map(i => keyOf(i) === k ? { ...i, qty: i.qty + qty } : i);
      }
      return [...prev, { ...book, qty }];
    });
  };

  const updateQty = (book, qty) => {
    const k = keyOf(book);
    setItems(prev => prev.map(i => keyOf(i) === k ? { ...i, qty: Math.max(1, qty) } : i));
  };

  const removeFromCart = (book) => {
    const k = keyOf(book);
    setItems(prev => prev.filter(i => keyOf(i) !== k));
  };

  const clearCart = () => setItems([]);

  const totalCount = items.reduce((sum, i) => sum + i.qty, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, updateQty, removeFromCart, clearCart, totalCount, keyOf }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
