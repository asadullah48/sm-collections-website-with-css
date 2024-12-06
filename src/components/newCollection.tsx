"use client";
import React, { useEffect, useState } from "react";
import { Whisper } from "next/font/google";
import Data from "@/utils/productData";
import ProductCard, { IProduct } from "./productCard";
import "@/style/newCollection.css"; // Import the custom CSS file

const whisper = Whisper({ subsets: ["latin"], weight: ["400"] });

const tabsData = ["All", "Men's Shoes", "Watche's", "Woman's shoes", "Kid's shoes", "Clothe's", "Jewelry's", "Perfume's"];

const NewCollection = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [data, setData] = useState<IProduct[]>([]);

  const shuffleArray = (array: any) => {
    return array
      .map((value: any) => ({ value, sort: Math.random() }))
      .sort((a: any, b: any) => a.sort - b.sort)
      .map(({ value }: any) => value);
  };

  useEffect(() => {
    setData(shuffleArray(Data).slice(0, 20));
  }, []);

  const handleTab = (index: number) => {
    const category = tabsData[index].toLowerCase();
    setSelectedTab(index);

    if (category === "all") {
      setData(shuffleArray(Data).slice(0, 20));
      console.log("shuffleArray");
      return;
    }

    const filterData = Data.filter((item) =>
      item.category.map((cat) => cat.toLowerCase()).includes(category)
    );
    setData(shuffleArray(filterData));
  };

  return (
    <div className="container">
      <div className="text-center">
        <h3 className={`new-arrival-title ${whisper.className}`}>For Your Style and Elegance</h3>
        <h2 className="new-arrival-heading">Our New Collection</h2>

        <ul className="tabs-list">
          {tabsData.map((text, index) => (
            <li
              key={text}
              className={`tab-item ${selectedTab === index ? "tab-item-active" : ""}`}
              onClick={() => handleTab(index)}
            >
              {text}
            </li>
          ))}
        </ul>

        <div className="product-grid">
          {data.map((item: IProduct) => (
            <ProductCard
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              sale={item.sale}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewCollection;
