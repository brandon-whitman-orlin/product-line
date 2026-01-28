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

import Beau from "../../../assets/characters/Beau_TRANSPARENT.svg";
import BeauPin from "../../../assets/productimages/characterbuttons/Beau_Pin.png";

function BeauButton() {
  const { addItem } = useCart();
  const oneinch = getProductBySku("beau_pin_1");
  const onetwofiveinch = getProductBySku("beau_pin_2");
  const twotwofiveinch = getProductBySku("beau_pin_3");

  return (
    <div className="product page">
      <Navbar />
      <main className="main">
        <PageSection large>
          <h1>
            The <strong>ROOTINEST TOOTINEST</strong> cowboy this side of the
            Mississippi
          </h1>
          <div className="section-content">
            <img
              src={Beau}
              alt="Black and white image of a smiley face (Beau) with arms and legs wearing a cowboy hat."
            />
            <ul className="character-info">
              <li>
                <strong>Full Name: </strong>Beau Cassidy
              </li>
              <li>
                <strong>Birthday: </strong>August 2nd, 1878
              </li>
              <li>
                <strong>Species: </strong>Cowboy
              </li>
              <li>
                <strong>Personality: </strong>Outgoing
              </li>
              <li>
                <strong>Likes: </strong>Horses, Black coffee, Old movies
              </li>
              <li>
                <strong>Dislikes: </strong>Cold weather, Desserts that are too
                Sweet, New technology
              </li>
            </ul>
          </div>
          <ProductDisplay moving>
            <div className="product-wrapper">
              <Product
                product_images={[BeauPin]}
                product_link=""
              />

              <div className="add-to-cart-section">
                <h3>{oneinch.name}</h3>
                <p>${Number(oneinch.price).toFixed(2)}</p>
                <button onClick={() => addItem(oneinch.sku, 1)}>
                  Add to cart
                </button>
              </div>
            </div>

            <div className="product-wrapper">
              <Product
                product_images={[BeauPin]}
                product_link=""
              />

              <div className="add-to-cart-section">
                <h3>{onetwofiveinch.name}</h3>
                <p>${Number(onetwofiveinch.price).toFixed(2)}</p>
                <button onClick={() => addItem(onetwofiveinch.sku, 1)}>
                  Add to cart
                </button>
              </div>
            </div>

            <div className="product-wrapper">
              <Product
                product_images={[BeauPin]}
                product_link=""
              />

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
            Add a little <strong>YEEHAW</strong> to your life, with a{" "}
            <strong>BEAU BUTTON</strong>.
          </p>

          {/*  */}

          {/*  */}
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

export default BeauButton;
