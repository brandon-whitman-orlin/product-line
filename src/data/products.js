// src/data/products.js
import products from "./products.json";

export function getProductBySku(sku) {
  return products.find((p) => p.sku === sku) || null;
}

export default products;
