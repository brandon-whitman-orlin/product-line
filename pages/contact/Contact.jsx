import React, { useEffect, useState } from "react";
import "../Page.css";
import "./Contact.css";

import Navbar from "../../components/navbar/Navbar";
import PageSection from "../../components/pagesection/PageSection";
import WebFooter from "../../components/webfooter/WebFooter";

import Susquehana from "../../assets/characters/Susquehana_TRANSPARENT.svg";

function Contact() {
  return (
    <div className="contact page">
      <Navbar />
      <main className="main">
        <PageSection large>
          <h1>
            Let's talk <strong>TRINKETS</strong>
          </h1>
          <div className="section-content">
            <img
              src={Susquehana}
              alt="Black and white image of a squid (Susquehana) waving at you."
            />
            <p>
              You can reach us at <strong>business@simpletrinket.com</strong>.
            </p>
          </div>
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

export default Contact;
