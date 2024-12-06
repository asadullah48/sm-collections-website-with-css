import React from 'react';
import "@/style/about.css";

const About = () => {
  return (
    <main className="about-container">
      <section className="about-hero">
        <h1>About Us</h1>
        <p>
          Discover the finest collection of shoes, clothing, jewelry, and perfumes for men, women, and kids. Our mission is to deliver quality, style, and affordability all in one place.
        </p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>Who We Are</h2>
          <p>
            We are a passionate team dedicated to providing you with the latest trends in fashion. From casual wear to elegant outfits, from classic perfumes to stylish accessories, we have it all for you and your family.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Offerings</h2>
          <ul>
            <li>${`<strong>Men's and Women's Shoes:</strong> Stylish, comfortable, and durable footwear.`}</li>
            <li>${`<strong>Watche's</strong>Elegant watches for every style, blending timeless design with modern precision.`}</li>
            <li>${`<strong>Kids' Shoes:</strong> Trendy and supportive designs for little feet.`}</li>
            <li>${`<strong>Perfumes:</strong> A collection of enchanting fragrances for all occasions.`}</li>
            <li>${`<strong>Jewelry:</strong> Elegant pieces to add sparkle to your look.`}</li>
            <li>${`<strong>Clothing:</strong> A variety of outfits for every style and season.`}</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Our Vision</h2>
          <p>
            To become your go-to destination for fashion and lifestyle products, combining quality and affordability in every category.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;