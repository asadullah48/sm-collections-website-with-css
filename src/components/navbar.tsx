import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa"; // Icon for close button
import "@/style/navbar.css";

const Navbar = ({ setShowCart }: any) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to control sidebar visibility

  return (
    <div className="navbar-container">
      <div className="navbar-content">
        {/* Hamburger menu icon */}
        <RxHamburgerMenu
          className="hamburger-menu-icon"
          onClick={() => setIsSidebarOpen(true)}
        />

        {/* Logo */}
        <Link href="/" className="navbar-logo">
          SM Collections
        </Link>

        {/* Links for larger screens */}
        <ul className="navbar-links">
          <Link href="/" className="navLink">
            Home
          </Link>
          <Link href="/shop" className="navLink">
            Shop
          </Link>
          <Link href="/about" className="navLink">
            About
          </Link>
          <Link href="/contact" className="navLink">
            Contact
          </Link>
        </ul>

        {/* Icons */}
        <div className="navbar-icons">
          <div className="cart-icon" onClick={() => setShowCart(true)}>
            <AiOutlineShoppingCart />
          </div>
          <AiOutlineSearch />
        </div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "sidebar-open" : ""}`}>
        {/* Close button */}
        <div className="sidebar-header">
          <h2 className="sidebar-title">Menu</h2>
          <FaTimes
            className="close-icon"
            onClick={() => setIsSidebarOpen(false)}
          />
        </div>

        {/* Sidebar Links */}
        <ul className="sidebar-links">
          <li>
            <Link href="/" className="navLink" onClick={() => setIsSidebarOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="navLink" onClick={() => setIsSidebarOpen(false)}>
              Shop
            </Link>
          </li>
          <li>
            <Link href="/about" className="navLink" onClick={() => setIsSidebarOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="navLink" onClick={() => setIsSidebarOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Backdrop */}
      {isSidebarOpen && (
        <div
          className="sidebar-backdrop"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
