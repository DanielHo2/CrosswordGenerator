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
              <img src={cwLogo2} alt="cwlogo" />
              <p>
                This is a crossword generator application that generates
                crossword puzzles around your keyword.
              </p>
              <p>Copyright © 2023 Crossword Generator - All rights reserved.</p>
            </div>
            <div className="footer-box-links">
              <h3>Site Map</h3>
              <ul>
                <a href="#header">
                  <li>Home</li>
                </a>
                <a href="#branding">
                  <li>Daily Puzzle</li>
                </a>
                <a href="#services">
                  <li>About</li>
                </a>
                <a href="#pricing">
                  <li>Stats</li>
                </a>
                <a href="#fiverr">
                  <li>Share</li>
                </a>
                <a href="#contact">
                  <li>Support</li>
                </a>
                <a href="#contact">
                  <li>Generated Crosswords</li>
                </a>
                <a href="#contact">
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
