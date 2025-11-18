import React, { useEffect, useState } from "react";
import "./Navbar.css";

import { ReactComponent as Hambert } from "../../assets/characters/Hambert_TRANSPARENT.svg";

import Dropdown from '../dropdown/Dropdown';

const Navbar = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${collapsed ? "collapsed" : ""}`}>
      <a href="/" aria-label="Homepage">
        <span className="site-logo"><Hambert /></span>
        <span className="site-name">SIMPLETRINKET</span>
      </a>

      <ul className="nav-list">
        <Dropdown
          label="Shop"
          subItems={[
            // {
            //   label: 'Collections',
            //   href: '/shop/collections',
            //   ariaLabel: 'View our collections',
            // },
            {
              label: 'Shop All',
              href: '/shop',
              ariaLabel: 'View all of our items',
            },
          ]}
        />

        <li>
          <a href="/about" aria-label="Learn About Us">
            About
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
