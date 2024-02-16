import React from "react";
import MultipleMeats from "../assets/MeatsOnGrill.jpg"
import "../styles/About.css"

function About() {
  return (
    <div className="about">
      <div className="aboutTop" style={{ backgroundImage: `url(${MultipleMeats})` }}></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ullam in, itaque earum ipsam, vel pariatur saepe, ad unde aspernatur illo est cumque corporis aliquam! Facere nobis fugiat velit quo, enim quis quos asperiores unde non maiores ratione officiis deleniti nihil molestias possimus, quia atque! Excepturi esse voluptatum sapiente dignissimos nesciunt? Fugiat corrupti odit dicta necessitatibus ex, nemo et placeat quam, illo molestias, dolorum qui. Non enim eum reiciendis nesciunt molestiae officiis asperiores dolor tenetur voluptatibus molestias, doloribus, reprehenderit, aperiam deleniti! Eos cupiditate repudiandae aspernatur, ad dicta, perspiciatis odit provident quisquam debitis impedit recusandae doloribus veritatis magnam molestias amet. Et!
        </p>
      </div>
    </div>
  );
}

export default About;
