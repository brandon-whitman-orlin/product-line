import React, { useEffect, useState } from "react";
import "../Page.css";
import "./Shop.css";

import Navbar from "../../components/navbar/Navbar";
import PageSection from "../../components/pagesection/PageSection";
import ProductDisplay from "../../components/productdisplay/ProductDisplay";
import Product from "../../components/product/Product";
import WebFooter from "../../components/webfooter/WebFooter";

import Hambert from "../../assets/characters/Hambert_TRANSPARENT.svg";
import Susquehana from "../../assets/characters/Susquehana_TRANSPARENT.svg";

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
              <strong>SIMPLETRINKET</strong>'s first line of
              buttons, hand-drawn and handmade-to-order by our own cofounder
              Brandon.
            </p>
            <ProductDisplay moving>
              <Product
                product_images={[
                  "https://cdn.jsdelivr.net/gh/brandon-whitman-orlin/cats/images/cat1.jpg",
                  "https://cdn.jsdelivr.net/gh/brandon-whitman-orlin/cats/images/cat2.jpg",
                ]}
                product_description="Beau"
                product_link="/product/1"
              />

              <Product
                product_images={[
                  "https://cdn.jsdelivr.net/gh/brandon-whitman-orlin/cats/images/cat3.jpg",
                ]}
                product_description="Carlton"
                product_link="/product/2"
              />

              <Product
                product_images={[
                  "https://cdn.jsdelivr.net/gh/brandon-whitman-orlin/cats/images/cat4.jpg",
                ]}
                product_description="Hambert"
                product_link="/product/3"
              />

              <Product
                product_images={[
                  "https://cdn.jsdelivr.net/gh/brandon-whitman-orlin/cats/images/cat5.jpg",
                  "https://cdn.jsdelivr.net/gh/brandon-whitman-orlin/cats/images/cat6.jpg",
                ]}
                product_description="Susquehana"
                product_link="/product/4"
              />
            </ProductDisplay>
          </div>
          <p>Want to bring the joy of <strong>SIMPLETRINKET</strong> to yourself or a loved one? Contact us at <strong>business@simpletrinket.com</strong>.</p>
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
