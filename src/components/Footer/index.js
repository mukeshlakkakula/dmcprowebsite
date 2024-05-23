import React from "react";
import "./index.css";
import "font-awesome/css/font-awesome.min.css";

const Footer = () => {
  return (
    <footer id="footer-section">
      <section className="footer">
        <div className="container">
          <div className="detail">
            <h3>Dmcpro.in</h3>
            <p>
              Revolutionizing Digital Marketing with Authentic Engagement. At
              Dmcpro.in, we understand the importance of creating meaningful
              interactions that drive real results. Our unique selling
              proposition (USP) lies in our ability to engage genuine customers.
            </p>
            <h5>Get in touch</h5>
            <a href="mailto:contact@dmcpro.in">contact@dmcpro.in</a>
            <div className="social">
              <a href="#">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-telegram"></i>
              </a>
              <a href="#">
                <i className="fa fa-youtube"></i>
              </a>
              <a href="#">
                <i className="fa fa-whatsapp"></i>
              </a>
              <a href="#">
                <i className="fa fa-snapchat-square"></i>
              </a>
            </div>
          </div>
          <div className="about-us">
            <h4>About Us</h4>
            <ul>
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">
                  Careers <span>We're Hiring!</span>
                </a>
              </li>
              <li>
                <a href="#">Mission and Values</a>
              </li>
              <li>
                <a href="#">Partnerships</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">Media & Press</a>
              </li>
            </ul>
          </div>
          <div className="help">
            <h4>Help</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Booking Guide</a>
              </li>
              <li>
                <a href="#">Cancellation Policy</a>
              </li>
              <li>
                <a href="#">Site Map</a>
              </li>
              <li>
                <a href="#">Contact Support</a>
              </li>
              <li>
                <a href="#">Community Guidelines</a>
              </li>
              <li>
                <a href="#">Report an Issue</a>
              </li>
            </ul>
          </div>
          <div className="resources">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#">Newsletter</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">Offers</a>
              </li>
              <li>
                <a href="#">E-books</a>
              </li>
              <li>
                <a href="#">Case Studies</a>
              </li>
              <li>
                <a href="#">Webinars</a>
              </li>
            </ul>
          </div>
          <div className="newsletter">
            <h4>Subscribe to our Newsletter</h4>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copy">
            &copy;2024 - Dmcpro.in, all rights reserved
          </div>
          <div className="links">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
