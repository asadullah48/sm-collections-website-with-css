import React from 'react';
import Image from 'next/image'; 
import "@/style/hero.css";


const Hero = () => {
  return (
    <div className="hero-container">
      {/* Hero section container with padding-top for spacing */}
      
      {/* Image displayed in the Hero section */}
      <Image 
        className="hero-image"
        src="/banner1.jpg"
        width={1500}
        height={1000}
        alt="Hero Image"
      />

      {/* Overlay box containing heading, paragraph, and button */}
      <div className="hero-overlay">
        {/* Heading of the Hero section */}
        <h2 className="hero-heading">
          Introducing Our New Collection
        </h2>

        {/* Description text */}
        <p className="hero-description">
        {`Discover the Perfect Collection for You – Trendy Shoes, Stylish Clothing, Elegant Jewelry, and Kids' Fashion!`}
          
        </p>

        {/* Button to navigate to the shop */}
        <button className="hero-button">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
