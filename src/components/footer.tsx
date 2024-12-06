import React from "react";
import Link from "next/link";
import "@/style/footer.css"; // Import the custom CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid container">
        {/* Logo Section */}
        <div className="footer-logo-section">
          <div className="footer-logo">
            <span>SM</span> Collections
          </div>
          <p className="footer-description">
          Discover your perfect look with our curated collection of footwear, fashion, and luxury accessories.
          </p>
        </div>

        {/* Navbar Links Section */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link href="/" className="footer-link">
            Home
          </Link>
          <Link href="/shop" className="footer-link">
            Shop
          </Link>
          <Link href="/about" className="footer-link">
            About
          </Link>
          <Link href="/contact" className="footer-link">
            Contact
          </Link>
        </div>

        {/* Help Links Section */}
        <div className="footer-help">
          <h4>Help</h4>
          <Link href="#" className="footer-link">
            FAQs
          </Link>
          <Link href="#" className="footer-link">
            Support
          </Link>
          <Link href="#" className="footer-link">
            Shipping
          </Link>
          <Link href="#" className="footer-link">
            Returns
          </Link>
        </div>

        {/* Newsletter Subscription Section */}
        <div className="footer-newsletter">
          <h4>Newsletter</h4>
          <p className="footer-description">
            Subscribe to our newsletter for the latest updates.
          </p>
          <form className="footer-form">
            <input
              type="email"
              className="footer-newsletter-input"
              placeholder="Enter your email"
              required
            />
            <button
              type="submit"
              onClick={() => alert("Send Your Message Successfully")}
              className="footer-newsletter-button"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>&copy; 2024 SM Collection. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
