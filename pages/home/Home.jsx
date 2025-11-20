import React, { useEffect, useState } from "react";
import "../Page.css";
import "./Home.css";

import Navbar from "../../components/navbar/Navbar";
import PageSection from "../../components/pagesection/PageSection";
import ProductDisplay from "../../components/productdisplay/ProductDisplay";
import Product from "../../components/product/Product";
import WebFooter from "../../components/webfooter/WebFooter";

import Hambert from "../../assets/characters/Hambert_TRANSPARENT.svg";
import Susquehanna from "../../assets/characters/Susquehanna_TRANSPARENT.svg";
import Carlton from "../../assets/characters/Carlton_TRANSPARENT.svg";

import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram.svg";
import { ReactComponent as TikTokIcon } from "../../assets/icons/tiktok.svg";
import { ReactComponent as YouTubeIcon } from "../../assets/icons/youtube.svg";


function Home() {
  return (
    <div className="home page">
      <Navbar />
      <main className="main">
        <PageSection large>
          <h1>
            Small <strong>THRILLS</strong>, no <strong>FRILLS</strong>
          </h1>
          <div className="section-content">
            <img
              src={Hambert}
              alt="Black and white image of a hamster (Hambert) wearing a tophat and necktie, he is carrying a small briefcase."
            />
            <p>
              Products you never knew you needed, at prices you never thought
              possible. Only at <strong>SIMPLETRINKET</strong>
              .
            </p>
          </div>
          <a href="/shop" className="cta-button">
            Shop Now
          </a>
        </PageSection>
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
          <a href="/shop/character-buttons" className="cta-button">
            Shop Buttons
          </a>
        </PageSection>
        <PageSection large>
          <h1>
            Follow us on <strong>Social Media</strong>
          </h1>
          <div className="section-content reverse">
            <img
              src={Susquehanna}
              alt="Black and white image of a squid (Susquehanna) waving at you."
            />
            <p>
              From new releases to behind the scenes, see the hard work we put
              in to make everything <strong>SIMPLE</strong>.
            </p>
          </div>
          <div className="button-display">
            <a href="/" target="_blank" className="social-button">
                <InstagramIcon />
              Instagram
            </a>
            <a href="/" target="_blank" className="social-button">
                <TikTokIcon />
              TikTok
            </a>
            <a href="/" target="_blank" className="social-button">
                <YouTubeIcon />
              YouTube
            </a>
          </div>
        </PageSection>
        <PageSection large>
          <h1>
            Let's talk <strong>TRINKETS</strong>
          </h1>
          <div className="section-content">
            <img
              src={Carlton}
              alt="Black and white image of a milk carton (Carlton) sitting happily."
            />
            <p>
              Want a <strong>CUSTOM TRINKET</strong>? Want to join the <strong>TRINKET TEAM</strong>? Whatever's on your mind, here's where to <strong>REACH OUT TO US</strong>.
            </p>
          </div>
          <a href="/contact " className="cta-button">
            Contact Us
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

export default Home;
