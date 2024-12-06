import React from 'react';
import Image from 'next/image';
import "@/style/collectionCard.css";

interface propsType {
    img: string;
    type: string;
    quantity: string;
};

const CategoryCard = ({ img, type, quantity }: propsType) => {
  return (
    <div className="category-card">
        <Image
          className="category-image"
          src={img}
          width={250}
          height={250}
          alt={type}
        />
        <div className="category-info">
            <h2 className="category-type">{type}</h2>
            <p className="category-quantity">{quantity}</p>
        </div>
    </div>
  );
};

export default CategoryCard; // Exporting the CategoryCard component to be used in other parts of the app
