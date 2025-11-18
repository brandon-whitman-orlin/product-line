import React, { useEffect, useState } from "react";
import "../Page.css";
import "./Contact.css";

import Navbar from "../../components/navbar/Navbar";
import PageSection from "../../components/pagesection/PageSection";
import WebFooter from "../../components/webfooter/WebFooter";

import Beau from "../../assets/characters/Beau_TRANSPARENT.svg";

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
                      src={Beau}
                      alt="Black and white image of a smiley face (Beau) with arms and legs wearing a cowboy hat."
                    />
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est iste, reprehenderit neque fugiat numquam qui soluta obcaecati provident velit voluptates delectus ullam ut aliquid veritatis. Ut ipsum a eum corporis recusandae tenetur itaque minus numquam maiores sed reprehenderit labore pariatur deleniti, porro magni officiis dolorem temporibus commodi tempora. Officiis, mollitia.
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
