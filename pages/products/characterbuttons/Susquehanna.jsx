import React, { useEffect, useState } from "react";
import "../Products.css";

import Navbar from "../../../components/navbar/Navbar";
import PageSection from "../../../components/pagesection/PageSection";
import WebFooter from "../../../components/webfooter/WebFooter";
import ProductDisplay from "../../../components/productdisplay/ProductDisplay";
import Product from "../../../components/product/Product";

import Susquehanna from "../../../assets/characters/Susquehanna_TRANSPARENT.svg";

function SusquehannaButton() {
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
            <Product
              product_images={[
                "../../assets/productimages/characterbuttons/s_s_b.jpg",
                "../../assets/productimages/characterbuttons/s_s_p.jpg",
              ]}
              product_description='Susquehanna 1" pin'
              product_link=""
            />

            <Product
              product_images={[
                "../../assets/productimages/characterbuttons/s_m_b.jpg",
                "../../assets/productimages/characterbuttons/s_m_p.jpg",
              ]}
              product_description='Susquehanna 1.25" pin'
              product_link=""
            />

            <Product
              product_images={[
                "../../assets/productimages/characterbuttons/s_l_b.jpg",
                "../../assets/productimages/characterbuttons/s_l_p.jpg",
              ]}
              product_description='Susquehanna 2.25" pin'
              product_link=""
            />
          </ProductDisplay>
          <p className="product-cta">
            She's got <strong>SIX ARMS</strong>, that's <strong>SIX GREAT REASONS</strong> to buy a{" "}
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
