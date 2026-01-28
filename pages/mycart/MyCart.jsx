import React from "react";
import "../Page.css";
import "./MyCart.css";

import Navbar from "../../components/navbar/Navbar";
import PageSection from "../../components/pagesection/PageSection";
import WebFooter from "../../components/webfooter/WebFooter";

import CartTable from "../../components/cart/CartTable";

function MyCart() {
  return (
    <div className="cart page">
      <Navbar />
      <main className="main">
        <PageSection large>
          <h1>
            My <strong>CART</strong>
          </h1>
          <CartTable />
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

export default MyCart;
