import React, { useEffect, useState } from "react";
import "../Page.css";
import "./Shop.css";

import Navbar from "../../components/navbar/Navbar";
import PageSection from "../../components/pagesection/PageSection";
import ProductDisplay from "../../components/productdisplay/ProductDisplay";
import Product from "../../components/product/Product";
import WebFooter from "../../components/webfooter/WebFooter";

import BeauPin from "../../assets/productimages/characterbuttons/Beau_Pin.png";
import CarltonPin from "../../assets/productimages/characterbuttons/Carlton_Pin.png";
import HambertPin from "../../assets/productimages/characterbuttons/Hambert_Pin.png";
import SusquehannaPin from "../../assets/productimages/characterbuttons/Susquehanna_Pin.png";

function Shop() {
  return (
    <div className="shop page">
      <Navbar />
      <main className="main">
        <PageSection large>
          <h1>
            SIMPLE
            <wbr />
            TRINKET Character Buttons
          </h1>
          <div className="section-content column">
            <p>
              <strong>SIMPLETRINKET</strong>'s first line of
              buttons, hand-drawn and handmade-to-order by our own cofounder
              Brandon.
            </p>
            <ProductDisplay moving>
              <Product
                product_images={[BeauPin]}
                product_description="Beau"
                product_link="/products/character-buttons/beau"
              />

              <Product
                product_images={[CarltonPin]}
                product_description="Carlton"
                product_link="/products/character-buttons/carlton"
              />

              <Product
                product_images={[HambertPin]}
                product_description="Hambert"
                product_link="/products/character-buttons/hambert"
              />

              <Product
                product_images={[SusquehannaPin]}
                product_description="Susquehanna"
                product_link="/products/character-buttons/susquehanna"
              />
            </ProductDisplay>
          </div>
          <a href="/shop/character-buttons" className="cta-button">
            Shop Buttons
          </a>
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

export default Shop;
