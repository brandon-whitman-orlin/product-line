import React, { useEffect, useState } from "react";
import "../Products.css";

import Navbar from "../../../components/navbar/Navbar";
import PageSection from "../../../components/pagesection/PageSection";
import WebFooter from "../../../components/webfooter/WebFooter";
import ProductDisplay from "../../../components/productdisplay/ProductDisplay";
import Product from "../../../components/product/Product";

import Carlton from "../../../assets/characters/Carlton_TRANSPARENT.svg";

function CarltonButton() {
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
            <Product
              product_images={[c_s_b, c_s_p]}
              product_description='Carlton 1" pin'
              product_link=""
            />

            <Product
              product_images={[c_m_b, c_m_p]}
              product_description='Carlton 1.25" pin'
              product_link=""
            />

            <Product
              product_images={[c_l_b, c_l_p]}
              product_description='Carlton 2.25" pin'
              product_link=""
            />
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
