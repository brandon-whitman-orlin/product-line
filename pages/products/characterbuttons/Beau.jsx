import React, { useEffect, useState } from "react";
import "../Products.css";

import Navbar from "../../../components/navbar/Navbar";
import PageSection from "../../../components/pagesection/PageSection";
import WebFooter from "../../../components/webfooter/WebFooter";
import ProductDisplay from "../../../components/productdisplay/ProductDisplay";
import Product from "../../../components/product/Product";

import b_s_b from "../../../assets/productimages/characterbuttons/b_s_b.jpg";
import b_s_p from "../../../assets/productimages/characterbuttons/b_s_p.jpg";
import b_m_b from "../../../assets/productimages/characterbuttons/b_m_b.jpg";
import b_m_p from "../../../assets/productimages/characterbuttons/b_m_p.jpg";
import b_l_b from "../../../assets/productimages/characterbuttons/b_l_b.jpg";
import b_l_p from "../../../assets/productimages/characterbuttons/b_l_p.jpg";

import Beau from "../../../assets/characters/Beau_TRANSPARENT.svg";

function BeauButton() {
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
            <Product
              product_images={[b_s_b, b_s_p]}
              product_description='Beau 1" pin'
              product_link=""
            />

            <Product
              product_images={[b_m_b, b_m_p]}
              product_description='Beau 1.25" pin'
              product_link=""
            />

            <Product
              product_images={[b_l_b, b_l_p]}
              product_description='Beau 2.25" pin'
              product_link=""
            />
          </ProductDisplay>
          <p className="product-cta">
            Add a little <strong>YEEHAW</strong> to your life, with a{" "}
            <strong>BEAU BUTTON</strong>.
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

export default BeauButton;
