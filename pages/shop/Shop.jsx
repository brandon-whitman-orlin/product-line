import React, { useEffect, useState } from "react";
import "../Page.css";
import "./Shop.css";

import Navbar from "../../components/navbar/Navbar";
import PageSection from "../../components/pagesection/PageSection";
import ProductDisplay from "../../components/productdisplay/ProductDisplay";
import Product from "../../components/product/Product";
import WebFooter from "../../components/webfooter/WebFooter";

import Hambert from "../../assets/characters/Hambert_TRANSPARENT.svg";
import Susquehanna from "../../assets/characters/Susquehanna_TRANSPARENT.svg";

import b_l_b from "../../assets/productimages/characterbuttons/b_l_b.jpg";
import b_l_p from "../../assets/productimages/characterbuttons/b_l_p.jpg";
import c_l_b from "../../assets/productimages/characterbuttons/c_l_b.jpg";
import c_l_p from "../../assets/productimages/characterbuttons/c_l_p.jpg";
import s_l_b from "../../assets/productimages/characterbuttons/s_l_b.jpg";
import s_l_p from "../../assets/productimages/characterbuttons/s_l_p.jpg";
import h_l_b from "../../assets/productimages/characterbuttons/h_l_b.jpg";
import h_l_p from "../../assets/productimages/characterbuttons/h_l_p.jpg";

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
                product_images={[b_l_b, b_l_p]}
                product_description="Beau"
                product_link="/products/character-buttons/beau"
              />

              <Product
                product_images={[c_l_b, c_l_p]}
                product_description="Carlton"
                product_link="/products/character-buttons/carlton"
              />

              <Product
                product_images={[h_l_b, h_l_p]}
                product_description="Hambert"
                product_link="/products/character-buttons/hambert"
              />

              <Product
                product_images={[s_l_b, s_l_p]}
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
