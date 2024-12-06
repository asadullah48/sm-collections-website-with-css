import React from 'react';
import Image from 'next/image';
import "@/style/featureCard.css";

// Props type for the FeatureCard component
interface PropsType {
  img: string; 
  title: string; 
  desc: string; 
}

const FeatureCard = ({ img, title, desc }: PropsType) => {
  return (
    <div className= "featureCardContainer">
      <Image
        className= "featureImage"
        src={img}
        width={60}
        height={50}
        alt={title}
      />

      <div className= "featureTextContainer">
        <h2 className= "featureTitle">{title}</h2>
        <p className= "featureDescription">{desc}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
