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

function Character_Buttons() {
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
              <strong>SIMPLETRINKET</strong>'s first line of buttons, hand-drawn
              and handmade-to-order by our own cofounder Brandon.
            </p>
            <ProductDisplay moving>
              <Product
                product_images={[
                  "../../assets/productimages/characterbuttons/b_l_b.jpg",
                  "../../assets/productimages/characterbuttons/b_l_p.jpg",
                ]}
                product_description="Beau"
                product_link="/products/character-buttons/beau"
              />

              <Product
                product_images={[
                  "../../assets/productimages/characterbuttons/c_l_b.jpg",
                  "../../assets/productimages/characterbuttons/c_l_p.jpg",
                ]}
                product_description="Carlton"
                product_link="/products/character-buttons/carlton"
              />

              <Product
                product_images={[
                  "../../assets/productimages/characterbuttons/h_l_b.jpg",
                  "../../assets/productimages/characterbuttons/h_l_p.jpg",
                ]}
                product_description="Hambert"
                product_link="/products/character-buttons/hambert"
              />

              <Product
                product_images={[
                  "../../assets/productimages/characterbuttons/s_l_b.jpg",
                  "../../assets/productimages/characterbuttons/s_l_p.jpg",
                ]}
                product_description="Susquehanna"
                product_link="/products/character-buttons/susquehanna"
              />
            </ProductDisplay>
          </div>
          <p>
            Want to bring the joy of <strong>SIMPLETRINKET</strong> to yourself
            or a loved one? Contact us at{" "}
            <strong>business@simpletrinket.com</strong>.
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

export default Character_Buttons;
