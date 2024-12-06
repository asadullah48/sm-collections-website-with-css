import NewCollection from '@/components/newCollection';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import "@/style/shop.css";

const ShopPage = () => {
  return (
    <main>
      <div className="shop-container">
        <Image
          className="shop-image"
          src="/shop.jpg"
          width={1500}
          height={900}
          alt="Hero Image"
        />
        <div className="shop-overlay">
          <h2 className="shop-heading">Upgrade Your Wardrobe with Ease</h2>
          <p className="shop-description">Discover Your Perfect Style in Every Category!</p>
          <button className="shop-button">
            <Link href="mailto:shaikhsamra855@gmail.com">Contact Us</Link>
          </button>
        </div>
      </div>
      <div>
        <NewCollection />
      </div>
    </main>
  );
};

export default ShopPage;