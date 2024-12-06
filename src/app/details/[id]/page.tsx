"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Data from "@/utils/productData";
import Link from "next/link";
import Image from "next/image";
import { AiFillStar, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineStar } from "react-icons/ai";
import { MdCompareArrows } from "react-icons/md";
import { FaFacebookSquare, FaGithub, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import "@/style/page.css"; // Import the custom CSS

export interface IProduct {
  id: number;
  img: string;
  name: string;
  price: number;
  category: string[];
  sale: boolean | undefined;
}

const DetailPage = () => {
  const params = useParams();

  const [productData, setProductData] = useState<IProduct>({
    id: 0,
    img: "",
    name: "",
    price: 0,
    category: [],
    sale: false,
  });

  useEffect(() => {
    const id = params.id;
    const getProductData = Data.filter((item) => item.id.toString() === id)[0];
    setProductData(getProductData);
  }, [params.id]);

  return (
    <div className="detail-container">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link href="/" className="breadcrumb-link">
          Home
        </Link>
        <div className="breadcrumb-separator" />
        <p className="capitalize">{productData?.category[0]}</p>
        <div className="breadcrumb-separator" />
        <p>{productData?.name}</p>
      </div>

      {/* Product Details */}
      <div className="detail-grid">
        {/* Left: Product Image */}
        <Image
          className="product-image"
          src={productData?.img}
          width={1000}
          height={1200}
          alt={productData?.name}
        />

        {/* Right: Product Information */}
        <div className="product-info">
          <div className="product-rating">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <p className="product-rating-text">(8 customer reviews)</p>
          </div>

          <div>
            <h2 className="product-title">{productData?.name}</h2>
            <p className="product-price">${productData?.price}.00</p>
          </div>

          <p className="product-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sed culpa, eos cumque excepturi veniam
            officia illum totam neque, dicta molestias beatae quos doloribus sunt recusandae eum. Reprehenderit,
            maxime adipisci.
          </p>

          <p className="product-stock">20 in stock</p>

          <button className="add-to-cart-btn">
            <AiOutlineShoppingCart className="text-[24px]" />
            Add to cart
          </button>

          <div className="action-buttons">
            <div>
              <AiOutlineHeart />
              Add to wish list
            </div>
            <div>
              <MdCompareArrows />
              Compare
            </div>
          </div>

          <div className="divider" />
          <div className="product-meta">Name: {productData?.name}</div>
          <div className="product-meta">
            Category: {productData?.category[0]}
          </div>
          <div className="product-meta tags">
            Tags:{" "}
            {productData?.category.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>

          <div className="divider" />
          <div className="social-share">
            SHARE:{" "}
            <div className="social-icons">
              < Link href="https://linkedin.com/in/samra-shaikh-7164142b6"
              target="blank"> <FaLinkedin className="icon"/></Link>
             
             
              
             <Link href="https://github.com/Samrasahaikh" target="blank">
              <FaGithub className="icon"/></Link>

             <Link href="https://facebook.com/samra.shaikh.14289"
              target="blank">
              <FaFacebookSquare className="icon" /></Link>
              
              <Link href="https://twitter.com">
              <FaTwitterSquare className="icon"/>
              </Link>

              <Link href="https://instagram.com">
              <FaInstagramSquare className="icon"/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;