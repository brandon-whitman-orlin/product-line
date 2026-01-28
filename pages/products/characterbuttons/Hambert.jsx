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

import Hambert from "../../../assets/characters/Hambert_TRANSPARENT.svg";
import HambertPin from "../../../assets/productimages/characterbuttons/Hambert_Pin.png";

function HambertButton() {
  const { addItem } = useCart();
  const oneinch = getProductBySku("hambert_pin_1");
  const onetwofiveinch = getProductBySku("hambert_pin_2");
  const twotwofiveinch = getProductBySku("hambert_pin_3");

  return (
    <div className="product page">
      <Navbar />
      <main className="main">
        <PageSection large>
          <h1>
            He's an injury lawyer with over 100 <strong>WON CASES</strong>!
          </h1>
          <div className="section-content">
            <img
              src={Hambert}
              alt="Black and white image of a hamster (Hambert) wearing a tophat and necktie, he is carrying a small briefcase."
            />
            <ul className="character-info">
              <li>
                <strong>Full Name: </strong>Hambert Rodgers
              </li>
              <li>
                <strong>Birthday: </strong>June 30th, 1983
              </li>
              <li>
                <strong>Species: </strong>Hamster
              </li>
              <li>
                <strong>Personality: </strong>Hard working
              </li>
              <li>
                <strong>Likes: </strong>Winning settlements, Making money,
                Justice
              </li>
              <li>
                <strong>Dislikes: </strong>Wrinkled clothes, Late trains, Slow
                walkers
              </li>
            </ul>
          </div>
          <ProductDisplay moving>
            <div className="product-wrapper">
              <Product product_images={[HambertPin]} product_link="" />

              <div className="add-to-cart-section">
                <h3>{oneinch.name}</h3>
                <p>${Number(oneinch.price).toFixed(2)}</p>
                <button onClick={() => addItem(oneinch.sku, 1)}>
                  Add to cart
                </button>
              </div>
            </div>

            <div className="product-wrapper">
              <Product product_images={[HambertPin]} product_link="" />

              <div className="add-to-cart-section">
                <h3>{onetwofiveinch.name}</h3>
                <p>${Number(onetwofiveinch.price).toFixed(2)}</p>
                <button onClick={() => addItem(onetwofiveinch.sku, 1)}>
                  Add to cart
                </button>
              </div>
            </div>

            <div className="product-wrapper">
              <Product product_images={[HambertPin]} product_link="" />

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
            If you've been <strong>INJURED AT WORK</strong>, or just need a
            little pick-me-up, you need a<strong> HAMBERT BUTTON</strong>.
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

export default HambertButton;
