import React, { useState } from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import MenuBackground from "../assets/Menu-Background.jpg";
import "../styles/Menu.css";
// import ButtonBackground from "../assets/ButtonBackground.jpg";

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("meat");
  const [cart, setCart] = useState([]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const menuItems = MenuList[selectedCategory] || [];

  const handleAddToCart = (menuItem) => {
    setCart([...cart, menuItem]);
    console.log("Items added to cart:", menuItem);
  };

  return (
    <div className="menu" style={{ backgroundImage: `url(${MenuBackground})` }}>
      <h1 className="menuTitle">Menu</h1>
      <div className="button-container">
        <button
          className="selected"
          onClick={() => handleCategoryChange("meats")}
        >
          Meat
        </button>
        <button
          className="selected"
          onClick={() => handleCategoryChange("sides")}
        >
          Sides
        </button>
        <button
          className="selected"
          onClick={() => handleCategoryChange("drinks")}
        >
          Drinks
        </button>
      </div>
      <div className="menuList">
        {menuItems.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
              AddToCart={() => handleAddToCart(menuItem)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
