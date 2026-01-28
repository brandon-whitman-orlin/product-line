import React, { useMemo, useState } from "react";
import "./Cart.css";

import { ReactComponent as Trash } from "../../assets/icons/trash.svg";

export default function Cart({ children }) {
  const [items, setItems] = useState(React.Children.toArray(children));
  const [quantities, setQuantities] = useState(
    React.Children.map(children, () => 1),
  );

  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutError, setCheckoutError] = useState("");

  const handleQuantityChange = (index, value) => {
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(1, Number(value));
    setQuantities(newQuantities);
  };

  const handleRemove = (index) => {
    setItems(items.filter((_, i) => i !== index));
    setQuantities(quantities.filter((_, i) => i !== index));
  };

  const total = useMemo(() => {
    return items.reduce(
      (sum, item, index) => sum + (item.props.price || 0) * quantities[index],
      0,
    );
  }, [items, quantities]);

  // Build a clean array to send to your serverless function
  const payloadItems = useMemo(() => {
    return items.map((item, index) => ({
      sku: item.props.sku, // IMPORTANT: stable id
      name: item.props.name,
      // send price for now (OK for prototype), but we’ll VERIFY price server-side using sku
      unitAmount: Math.round(Number(item.props.price) * 100), // cents
      quantity: quantities[index],
    }));
  }, [items, quantities]);

  const handleCheckout = async () => {
    setCheckoutError("");

    if (!payloadItems.length) {
      setCheckoutError("Your cart is empty.");
      return;
    }

    setIsCheckingOut(true);
    try {
      const res = await fetch("/.netlify/functions/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: payloadItems,
          // optional: you can pass success/cancel paths
          successPath: "/success",
          cancelPath: "/cart",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Checkout failed.");
      }

      if (!data?.url) {
        throw new Error("No checkout URL returned.");
      }

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
            <th className="product-name"></th>
            <th className="product-price">Price</th>
            <th className="product-quantity">Quantity</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, index) => (
            <tr key={`${item.props.sku || item.props.name}-${index}`}>
              <td className="prod-image">
              </td>
              <td className="prod-name strong">
                <p>{item.props.name}</p></td>
              <td className="prod-price">
                ${Number(item.props.price).toFixed(2)}
              </td>
              <td className="prod-quantity">
                <input
                  type="number"
                  min="1"
                  value={quantities[index]}
                  onChange={(e) => handleQuantityChange(index, e.target.value)}
                />
                <button
                  type="button"
                  className="prod-remove"
                  onClick={() => handleRemove(index)}
                  aria-label={`Remove ${item.props.name}`}
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
              <strong>${total.toFixed(2)}</strong>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="cart-actions">
        {checkoutError ? <p className="cart-error">{checkoutError}</p> : null}

        <button
          type="button"
          className="checkout-btn"
          onClick={handleCheckout}
          disabled={isCheckingOut || items.length === 0}
        >
          {isCheckingOut ? "Redirecting…" : "Checkout"}
        </button>
      </div>
    </div>
  );
}
