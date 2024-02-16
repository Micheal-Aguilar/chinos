import React from "react";

function MenuItem({ image, name, price,AddToCart }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <p>${price}</p>
      <button  className="addToCartBttn" onClick={AddToCart}>
        Add To Cart
      </button>
    </div>
  );
}

export default MenuItem;
