import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5 className="footer-title">About Us</h5>
            <p className="footer-text">
            Welcome to our dedicated pet care services, where your pet's happiness is our top priority. At The Pet Shop, we believe in providing exceptional care tailored to your pet's needs. Our experienced team is committed to ensuring your pet receives the love, attention, and specialized care they deserve. Discover how we can make a difference in your pet's life today.
            </p>
          </div>
          <div className="col-md-4">
            <h5 className="footer-title">Policy </h5>
            <ul className="footer-links list-unstyled">
              <li><a href="#!" className="footer-link">Privacy Policy</a></li>
              <li><a href="#!" className="footer-link">Refund Policy</a></li>
              <li><a href="#!" className="footer-link">Cancellation Policy</a></li>
              <li><a href="#!" className="footer-link">Terms & Conditions</a></li>
            </ul>
            
          </div>
          <div className="col-md-4">
            <h5 className="footer-title">Contact Us</h5>
            <p className="footer-text">123 Pet Street, Pet City, PC 12345</p>
            <p className="footer-text">
              Email: contact@mypetshop.com
              <br />
              Phone: (123) 456-7890
            </p>
            <div className="footer-social-icons">
              <a href="#!" className="social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#!" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#!" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#!" className="social-link">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4">
            <h5 className="footer-title">ThePetNest</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="#!" className="footer-link">Blog</a></li>
              <li><a href="#!" className="footer-link">Career</a></li>
              <li><a href="#!" className="footer-link">Support</a></li>
              <li><a href="#!" className="footer-link">About us</a></li>
              <li><a href="#!" className="footer-link">Pet Stores</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="footer-title">Services</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="#!" className="footer-link">Online Pet Shop</a></li>
              <li><a href="#!" className="footer-link">Buy Membership</a></li>
              <li><a href="#!" className="footer-link">Customer reviews</a></li>
              <li><a href="#!" className="footer-link">Report Animal Abuse</a></li>
              <li><a href="#!" className="footer-link">Download Mobile App</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links list-unstyled">
              <li>
                <a href="/" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/signup" className="footer-link">
                  SignUp
                </a>
              </li>
              <li>
                <a href="/login" className="footer-link">
                  Login
                </a>
              </li>
              <li>
                <a href="/view" className="footer-link">
                  View
                </a>
              </li>
              <li>
                <a href="/contactus" className="footer-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4"></div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
