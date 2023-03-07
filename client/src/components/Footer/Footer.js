import React from "react";
import "./Footer.css";
import cwLogo2 from "../../assets/img/cw-logo-02.png";

const Footer = () => {
  return (
    <>
      <section className="footer" id="footer">
        <div className="container">
          <div className="footer-box">
            <div className="footer-box-company">
              <img src={cwLogo2} alt="logo image" />
              <p>
                This is a crossword generator application that generates
                crossword puzzles around your keyword.
              </p>
              <p>Copyright © 2023 Crossword Generator - All rights reserved.</p>
              {/* <!-- Start of Contact Form --> */}
              <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <div className="contact-item">
                  <h5>Name*</h5>
                  <input
                    type="text"
                    name="First Name"
                    id=""
                    className="input"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="contact-item">
                  <h5>Email*</h5>
                  <input
                    type="text"
                    name="First Name"
                    id=""
                    className="input"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="contact-item">
                  <h5>Message*</h5>
                  <textarea
                    name="Message"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="contact-submit">
                  <div className="contact-button">
                    <input type="submit" value="Submit" className="btn-green" />
                  </div>
                </div>
              </form>
              {/* <!-- End of Contact Form --> */}
            </div>
            <div className="footer-box-links">
              <h3>Site Map</h3>
              <ul>
                <a href="index.html">
                  <li>Home</li>
                </a>
                <a href="#">
                  <li>Daily Puzzle</li>
                </a>
                <a href="#">
                  <li>Generated Crosswords</li>
                </a>
                <a href="#">
                  <li>Stats</li>
                </a>
                <a href="about.html">
                  <li>About</li>
                </a>
                <a href="share.html">
                  <li>Share</li>
                </a>
                <a href="#">
                  <li>Support</li>
                </a>
                <a href="#">
                  <li>Login</li>
                </a>
              </ul>
            </div>
            <div className="footer-box-socials">
              <h3>Social Media</h3>
              <a href="#" target="_blank">
                <li>
                  <i className="fab fa-instagram"></i>
                </li>
              </a>
              <a href="#" target="_blank">
                <li>
                  <i className="fab fa-facebook-f"></i>
                </li>
              </a>
              <a href="#" target="_blank">
                <li>
                  <i className="fab fa-linkedin-in"></i>
                </li>
              </a>
            </div>
            <div className="footer-box-development">
              <h3>Contact Us</h3>
              <a href="#">
                <li>Cameron Evans</li>
              </a>
              <a href="#">
                <li>Phil Steinke</li>
              </a>
              <a href="#">
                <li>Ethan Haeck</li>
              </a>
              <a href="#">
                <li>Daniel Ho</li>
              </a>
              <a href="#">
                <li>Campbell Lewis</li>
              </a>
              <a href="#">
                <li>D'Angelo Minnis</li>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
