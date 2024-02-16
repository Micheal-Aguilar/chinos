import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pexels-min-an-1482803.jpg";
import "../styles/Home.css";
function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Chino's Mexican BBQ </h1>
        <p>Best BBQ in Arizona !</p>
        <Link to="/menu">
          <button> ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
