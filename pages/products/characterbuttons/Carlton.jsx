import React, { useEffect, useState } from "react";
import "../Products.css";

import Navbar from "../../../components/navbar/Navbar";
import PageSection from "../../../components/pagesection/PageSection";
import WebFooter from "../../../components/webfooter/WebFooter";
import ProductDisplay from "../../../components/productdisplay/ProductDisplay";
import Product from "../../../components/product/Product";

import products from "../../../src/data/products.json";
import { useCart } from "../../../src/context/CartContext";
import { getProductBySku } from "../../../src/data/products";

import Carlton from "../../../assets/characters/Carlton_TRANSPARENT.svg";
import CarltonPin from "../../../assets/productimages/characterbuttons/Carlton_Pin.png";

function CarltonButton() {
  const { addItem } = useCart();
  const oneinch = getProductBySku("carlton_pin_1");
  const onetwofiveinch = getProductBySku("carlton_pin_2");
  const twotwofiveinch = getProductBySku("carlton_pin_3");

  return (
    <div className="product page">
      <Navbar />
      <main className="main">
        <PageSection large>
          <h1>
            You're gonna want some <strong>MILK</strong> with that!
          </h1>
          <div className="section-content">
            <img
              src={Carlton}
              alt="Black and white image of a milk carton (Carlton) sitting happily."
            />
            <ul className="character-info">
              <li>
                <strong>Full Name: </strong>Carlton B. Ovine
              </li>
              <li>
                <strong>Birthday: </strong>January 17th, 2021
              </li>
              <li>
                <strong>Species: </strong>Milk Carton
              </li>
              <li>
                <strong>Personality: </strong>Chill
              </li>
              <li>
                <strong>Likes: </strong>Cereal, Juice, Dinosaurs
              </li>
              <li>
                <strong>Dislikes: </strong>Bumpy car rides, Fizzy drinks, Power
                outages
              </li>
            </ul>
          </div>
          <ProductDisplay moving>
            <div className="product-wrapper">
              <Product product_images={[CarltonPin]} product_link="" />

              <div className="add-to-cart-section">
                <h3>{oneinch.name}</h3>
                <p>${Number(oneinch.price).toFixed(2)}</p>
                <button onClick={() => addItem(oneinch.sku, 1)}>
                  Add to cart
                </button>
              </div>
            </div>

            <div className="product-wrapper">
              <Product product_images={[CarltonPin]} product_link="" />

              <div className="add-to-cart-section">
                <h3>{onetwofiveinch.name}</h3>
                <p>${Number(onetwofiveinch.price).toFixed(2)}</p>
                <button onClick={() => addItem(onetwofiveinch.sku, 1)}>
                  Add to cart
                </button>
              </div>
            </div>

            <div className="product-wrapper">
              <Product product_images={[CarltonPin]} product_link="" />

              <div className="add-to-cart-section">
                <h3>{twotwofiveinch.name}</h3>
                <p>${Number(twotwofiveinch.price).toFixed(2)}</p>
                <button onClick={() => addItem(twotwofiveinch.sku, 1)}>
                  Add to cart
                </button>
              </div>
            </div>
          </ProductDisplay>
          <p className="product-cta">
            If you want <strong>STRONG BONES</strong>, and{" "}
            <strong>COOL VIBES</strong>, you need a
            <strong> CARLTON BUTTON</strong>.
          </p>
        </PageSection>
      </main>
      <WebFooter>
        <a href="/shop">Shop</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </WebFooter>
    </div>
  );
}

export default CarltonButton;
