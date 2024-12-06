import React from "react";
import BlogCard from "@/components/blogCard"; 
import "@/style/blogSection.css";

// Data for blog posts with image, title, date, and comment count
const data = [
  {
    img: "/blog1.jpg",
    title: "Fashion & Accessories for Every Occasion",
    date: "Dec 1, 2024",
    comment: 8,
  },
  {
    img: "/blog2.jpg",
    title: "Elegant & Timeless Fashion for Every Occasion",
    date: "Nov 28, 2024",
    comment: 5,
  },
  {
    img: "/blog4.jpg",
    title: "Stylish Attire, Confident Glow",
    date: "Nov 30, 2024",
    comment: 5,
  },
];

// BlockSection Component: Displays a section for the latest blog posts
const BlockSection = () => {
  return (
    <div className="block-section-container">
      {/* Section Title */}
      <h2 className="block-section-title">Latest News</h2>
      {/* Section Description */}
      <p className="block-section-description">
      Showcase the finest products of your store with beautifully curated collections
      </p>

      {/* Blog Cards Grid */}
      <div className="blog-cards-grid">
        {/* Loop through the blog data and render a BlogCard for each item */}
        {data.map((item) => (
          <BlogCard
            key={item.date}
            img={item.img} 
            title={item.title}
            date={item.date} 
            comment={item.comment} 
          />
        ))}
      </div>
    </div>
  );
};

export default BlockSection;
