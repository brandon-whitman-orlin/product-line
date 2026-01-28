import React, { createContext, useContext, useEffect, useMemo, useReducer } from "react";

const CartContext = createContext(null);

const STORAGE_KEY = "myshop_cart_v1";

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveCart(items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // ignore
  }
}

/**
 * Cart item shape:
 * { sku: string, quantity: number }
 */
function reducer(state, action) {
  switch (action.type) {
    case "INIT": {
      return action.items;
    }
    case "ADD": {
      const { sku, quantity = 1 } = action;
      const qty = Math.max(1, Number(quantity));
      const existingIndex = state.findIndex((i) => i.sku === sku);
      if (existingIndex >= 0) {
        const next = [...state];
        next[existingIndex] = { ...next[existingIndex], quantity: next[existingIndex].quantity + qty };
        return next;
      }
      return [...state, { sku, quantity: qty }];
    }
    case "SET_QTY": {
      const { sku, quantity } = action;
      const qty = Math.max(1, Number(quantity));
      return state.map((i) => (i.sku === sku ? { ...i, quantity: qty } : i));
    }
    case "REMOVE": {
      const { sku } = action;
      return state.filter((i) => i.sku !== sku);
    }
    case "CLEAR": {
      return [];
    }
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    dispatch({ type: "INIT", items: loadCart() });
  }, []);

  useEffect(() => {
    saveCart(items);
  }, [items]);

  const api = useMemo(() => {
    return {
      items, // [{sku, quantity}]
      addItem: (sku, quantity = 1) => dispatch({ type: "ADD", sku, quantity }),
      setQuantity: (sku, quantity) => dispatch({ type: "SET_QTY", sku, quantity }),
      removeItem: (sku) => dispatch({ type: "REMOVE", sku }),
      clearCart: () => dispatch({ type: "CLEAR" }),
      count: items.reduce((sum, i) => sum + i.quantity, 0),
    };
  }, [items]);

  return <CartContext.Provider value={api}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider />");
  return ctx;
}
