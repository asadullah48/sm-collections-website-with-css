import React from "react";
import Image from "next/image";
import "@/style/blogCard.css";

// Defining the type for the props that the BlogCard component will accept
interface propsType {
  img: string; 
  title: string; 
  date: string; 
  comment: number; 
}

const BlogCard = ({ img, title, date, comment }: propsType) => {
  return (
    <div className="blog-card-container">
      {/* Image of the blog post */}
      <Image
        className="blog-card-image"
        src={img}
        alt="post"
        width={600}
        height={600}
      />

      {/* Date and comment count */}
      <div className="blog-card-meta">
        <span>{date} /</span>
        <span>{comment} Comments</span>
      </div>

      {/* Blog post title */}
      <h3 className="blog-card-title">{title}</h3>
    </div>
  );
};

export default BlogCard;
