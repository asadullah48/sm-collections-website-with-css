import React from 'react';
import FeatureCard from './featureCard'; // Importing the FeatureCard component
import "@/style/feature.css";

// Defining an array of feature data
const data = [
    {
        img: "/icon.jpg", // Image URL for the first feature
        title: "Elegantly Curated", // Title of the first feature
        desc: "Shoes, Dresses, Jewelry, Perfumes", // Description of the first feature
    },
    {
        img: "/icon-shipping.jpg",
        title: "Free Shipping",
        desc: "Free shipping on all orders over $99",
    },
    {
        img: "/money-icone.jpg",
        title: "Secure Payment",
        desc: "Fully protected when paying online",
    },
];

const Feature = () => {
  return (
    <div className="feature-container">
        <div className="feature-grid">
            {/* Mapping over the feature data to generate FeatureCard components */}
            {data.map((item) => (
                <FeatureCard 
                    key={item.title} // Using title as the unique key
                    img={item.img} // Passing image URL to FeatureCard
                    title={item.title} // Passing title to FeatureCard
                    desc={item.desc} // Passing description to FeatureCard
                />
            ))}
        </div>
    </div>
  );
}

export default Feature;
