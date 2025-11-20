import React, { useEffect, useState } from "react";
import "../Products.css";

import Navbar from "../../../components/navbar/Navbar";
import PageSection from "../../../components/pagesection/PageSection";
import WebFooter from "../../../components/webfooter/WebFooter";
import ProductDisplay from "../../../components/productdisplay/ProductDisplay";
import Product from "../../../components/product/Product";

import h_s_b from "../../../assets/productimages/characterbuttons/h_s_b.jpg";
import h_s_p from "../../../assets/productimages/characterbuttons/h_s_p.jpg";
import h_m_b from "../../../assets/productimages/characterbuttons/h_m_b.jpg";
import h_m_p from "../../../assets/productimages/characterbuttons/h_m_p.jpg";
import h_l_b from "../../../assets/productimages/characterbuttons/h_l_b.jpg";
import h_l_p from "../../../assets/productimages/characterbuttons/h_l_p.jpg";

import Hambert from "../../../assets/characters/Hambert_TRANSPARENT.svg";

function HambertButton() {
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
            <Product
              product_images={[h_s_b, h_s_p]}
              product_description='Hambert 1" pin'
              product_link=""
            />

            <Product
              product_images={[h_m_b, h_m_p]}
              product_description='Hambert 1.25" pin'
              product_link=""
            />

            <Product
              product_images={[h_l_b, h_l_p]}
              product_description='Hambert 2.25" pin'
              product_link=""
            />
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
