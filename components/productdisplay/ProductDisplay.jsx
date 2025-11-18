import React from "react";

import "./ProductDisplay.css";

const ProductDisplay = ({ moving = false, children }) => {
  // Apply conditional class
  const className = moving ? "product-display moving" : "product-display";

  return (
    <div className={className}>
      <ul>
        {React.Children.map(children, (child, index) => (
          <li key={index}>
            {child}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDisplay;
