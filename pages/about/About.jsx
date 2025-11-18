import React, { useEffect, useState } from "react";
import "../Page.css";
import "./About.css";

import Navbar from "../../components/navbar/Navbar";
import PageSection from "../../components/pagesection/PageSection";
import WebFooter from "../../components/webfooter/WebFooter";

import Beau from "../../assets/characters/Beau_TRANSPARENT.svg";
import printer from "../../assets/images/printer.jpg";

function About() {
  return (
    <div className="about page">
      <Navbar />
      <main className="main">
        <PageSection large>
          <h1>
            The <strong>METHOD</strong> behind the <strong>MADNESS</strong>
          </h1>
          <div className="section-content">
            <img
              src={Beau}
              alt="Black and white image of a smiley face (Beau) with arms and legs wearing a cowboy hat."
            />
            <p>
              SIMPLETRINKET was formed when two college buddies, Brandon
              Whitman-Orlin, and Colin George, came together to put a brand
              together with one thing in mind: keeping things simple.
            </p>
          </div>
          <div className="section-content reverse">
            <img
              src={printer}
              alt="An image of our printer, the Bambu Lab P1S"
            />
            <p>
              With Colin's background in 3D fabrication, and Brandon's
              experience in design, the plan was pretty straightforward. We want
              to create things with a <strong>simple</strong> beauty to them.
            </p>
          </div>
          <div className="section-content">
            <p>
              We were equipped with a button press, a 3D printer, and a ton of
              ambition. <strong>SIMPLETRINKET</strong> aims to bring you
              products with a simple elegance.
            </p>
          </div>
          <a href="/shop" className="cta-button">
            Shop Now
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

export default About;
