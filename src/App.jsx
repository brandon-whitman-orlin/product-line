import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";
import Character_Buttons from "../pages/shop/Character_Buttons";
// import Collections from "../pages/shop/Collections";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";

import "./App.css"; // Ensure global styles are imported

const App = () => {
  return (
    <div
      className="app-container"
      style={{ minHeight: "100%", width: "100%", overflowX: "clip" }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/character-buttons" element={<Character_Buttons />} />
        {/* <Route path="/shop/collections" element={<Collections />} /> */}
        
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
