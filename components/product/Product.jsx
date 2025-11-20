import React from "react";

import "./Product.css";

const Product = ({
  product_images = [],
  product_description = "",
  product_link = "",
}) => {
  const mainImage = product_images[0] || "";
  const secondImage = product_images[1] || "";

  // Determine whether we should include an href
  const linkProps = product_link?.trim()
    ? { href: product_link }
    : {};

  return (
    <div className="product">
      <a {...linkProps} className="product-link">
        <div className="product-images">
          {mainImage && (
            <img
              src={mainImage}
              alt={product_description || "Product image"}
              className="product-image primary-image"
            />
          )}

          {secondImage && (
            <img
              src={secondImage}
              alt={product_description || "Product secondary image"}
              className="product-image secondary-image"
            />
          )}
        </div>
      </a>

      <p className="product-description">{product_description}</p>
    </div>
  );
};

export default Product;
