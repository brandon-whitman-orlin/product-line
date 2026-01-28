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

import Susquehanna from "../../../assets/characters/Susquehanna_TRANSPARENT.svg";
import SusquehannaPin from "../../../assets/productimages/characterbuttons/Susquehanna_Pin.png";

function SusquehannaButton() {
  const { addItem } = useCart();
  const oneinch = getProductBySku("susquehanna_pin_1");
  const onetwofiveinch = getProductBySku("susquehanna_pin_2");
  const twotwofiveinch = getProductBySku("susquehanna_pin_3");

  return (
    <div className="product page">
      <Navbar />
      <main className="main">
        <PageSection large>
          <h1>
            She gives <strong>GREAT HUGS</strong>, but would probably prefer to
            wave instead.
          </h1>
          <div className="section-content">
            <img
              src={Susquehanna}
              alt="Black and white image of a squid (Susquehanna) waving at you."
            />
            <ul className="character-info">
              <li>
                <strong>Full Name: </strong>Susquehanna Ika
              </li>
              <li>
                <strong>Birthday: </strong>January 12th, 2024
              </li>
              <li>
                <strong>Species: </strong>Squid
              </li>
              <li>
                <strong>Personality: </strong>Shy
              </li>
              <li>
                <strong>Likes: </strong>Jazz music, Hide and seek, Seaweed
              </li>
              <li>
                <strong>Dislikes: </strong>Public speaking, Washing dishes,
                Doctors' offices
              </li>
            </ul>
          </div>
          <ProductDisplay moving>
            <div className="product-wrapper">
              <Product product_images={[SusquehannaPin]} product_link="" />

              <div className="add-to-cart-section">
                <h3>{oneinch.name}</h3>
                <p>${Number(oneinch.price).toFixed(2)}</p>
                <button onClick={() => addItem(oneinch.sku, 1)}>
                  Add to cart
                </button>
              </div>
            </div>

            <div className="product-wrapper">
              <Product product_images={[SusquehannaPin]} product_link="" />

              <div className="add-to-cart-section">
                <h3>{onetwofiveinch.name}</h3>
                <p>${Number(onetwofiveinch.price).toFixed(2)}</p>
                <button onClick={() => addItem(onetwofiveinch.sku, 1)}>
                  Add to cart
                </button>
              </div>
            </div>

            <div className="product-wrapper">
              <Product product_images={[SusquehannaPin]} product_link="" />

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
            She's got <strong>SIX ARMS</strong>, that's{" "}
            <strong>SIX GREAT REASONS</strong> to buy a{" "}
            <strong>SUSQUEHANNA BUTTON</strong>.
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

export default SusquehannaButton;
