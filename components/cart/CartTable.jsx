import React, { useMemo, useState } from "react";
import "./Cart.css";

import productImages from "../../src/data/productImages";

import { ReactComponent as Trash } from "../../assets/icons/trash.svg";
import products from "../../src/data/products.json";
import { useCart } from "../../src/context/CartContext";

function toMoney(n) {
  return Number(n || 0).toFixed(2);
}

export default function CartTable() {
  const { items, setQuantity, removeItem, clearCart } = useCart();

  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutError, setCheckoutError] = useState("");

  const productBySku = useMemo(() => {
    const map = new Map();
    for (const p of products) map.set(p.sku, p);
    return map;
  }, []);

  const detailedItems = useMemo(() => {
    // join cart items with product data
    return items
      .map((ci) => {
        const p = productBySku.get(ci.sku);
        if (!p) return null;
        return {
          sku: ci.sku,
          name: p.name,
          price: p.price,
          image: p.image,
          quantity: ci.quantity,
        };
      })
      .filter(Boolean);
  }, [items, productBySku]);

  const total = useMemo(() => {
    return detailedItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
  }, [detailedItems]);

  const handleCheckout = async () => {
    setCheckoutError("");

    if (!detailedItems.length) {
      setCheckoutError("Your cart is empty.");
      return;
    }

    setIsCheckingOut(true);
    try {
      // IMPORTANT: send sku + quantity only; server decides the real price
      const res = await fetch("/.netlify/functions/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: detailedItems.map((i) => ({ sku: i.sku, quantity: i.quantity })),
          successPath: "/success",
          cancelPath: "/cart",
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Checkout failed.");
      if (!data?.url) throw new Error("No checkout URL returned.");

      window.location.href = data.url;
    } catch (err) {
      setCheckoutError(err.message || "Checkout failed.");
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <div className="cart-wrap">
      <table className="cart-table" cellSpacing="0">
        <thead>
          <tr className="tabletop">
            <th className="product-image">Product</th>
            <th className="product-name">Item</th>
            <th className="product-price">Price</th>
            <th className="product-quantity">Quantity</th>
          </tr>
        </thead>

        <tbody>
          {detailedItems.map((item) => (
            <tr key={item.sku}>
              <td className="prod-image">{productImages[item.image]}</td>
              <td className="prod-name strong">{item.name}</td>
              <td className="prod-price">${toMoney(item.price)}</td>
              <td className="prod-quantity">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => setQuantity(item.sku, e.target.value)}
                />
                <button
                  type="button"
                  className="prod-remove"
                  onClick={() => removeItem(item.sku)}
                  aria-label={`Remove ${item.name}`}
                >
                  <Trash />
                </button>
              </td>
            </tr>
          ))}

          <tr>
            <td />
            <td>
              <strong>Total</strong>
            </td>
            <td colSpan={2}>
              <strong>${toMoney(total)}</strong>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="cart-actions">
        {checkoutError ? <p className="cart-error">{checkoutError}</p> : null}

        <div className="cart-buttons">
          <button type="button" onClick={clearCart} disabled={!detailedItems.length || isCheckingOut}>
            Clear cart
          </button>

          <button
            type="button"
            className="checkout-btn"
            onClick={handleCheckout}
            disabled={!detailedItems.length || isCheckingOut}
          >
            {isCheckingOut ? "Redirecting…" : "Checkout"}
          </button>
        </div>
      </div>
    </div>
  );
}
