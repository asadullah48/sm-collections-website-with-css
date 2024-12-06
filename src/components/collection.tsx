import { Whisper } from "next/font/google";
import CategoryCard from "./collectionCard";
import React from "react";
import "@/style/collection.css";

// Initializing the Whisper font with specific subsets and weight
const whisper = Whisper({ subsets: ["latin"], weight: ["400"] });

// Array holding the data for each category, including image, type, and quantity
const data = [
  {
    img: "/top1.jpg",
    type: "Heel's",
    quantity: "(4 Items)",
  },
  {
    img: "/top2.jpg",
    type: "Bridel Dress",
    quantity: "(4 Items)",
  },
  {
    img: "/top3.jpg",
    type: "Watche's",
    quantity: "(5 Items)",
  },
];

const Collection = () => {
  return (
    <div className="category-container">
      <div className="category-content">
        {/* Title section with Whisper font for a special style */}
        <h3 className={`${whisper.className} category-title`}>
          Favorite Collection
        </h3>

        {/* Subheading for the category */}
        <h2 className="category-subheading">Our Top Collections</h2>

        {/* Flexbox container for arranging the category cards */}
        <div className="category-cards-container">
          {/* Looping through the data array to display each category card */}
          {data.map((item) => (
            <CategoryCard
              key={item.type} 
              img={item.img}
              type={item.type} 
              quantity={item.quantity}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
