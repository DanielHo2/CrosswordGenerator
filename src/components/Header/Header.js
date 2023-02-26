import React from "react";
import "./Header.css";
import fiverrLogo from "../../assets/img/robot.png";
import cwLogo2 from "../../assets/img/cw-logo-02.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="bar">
        <div className="bar__content u-centered">
          <img
            className="bar__logo"
            src={cwLogo2}
            alt="Crossword Generator logo"
          />
          <input type="checkbox" id="inpNavToggle" />
          <label className="bar__nav-toggle" for="inpNavToggle">
            <i className="material-icons">menu</i>
          </label>
          <nav className="nav">
            <a className="nav__link">
              <Link className="nav__link" to={"/"}>
                Home
              </Link>
            </a>
            <a className="nav__link" href="#branding">
              Daily Puzzle
            </a>
            <a className="nav__link">
              <Link className="nav__link" to={"/about"}>
                About
              </Link>
            </a>
            <a className="nav__link" href="#pricing">
              Stats
            </a>

            <a className="nav__link">
              <Link className="nav__link" to={"/share"}>
                Share
              </Link>
            </a>

            <a className="nav__link" href="#fiverr">
              Support
            </a>
            <a className="nav__link" href="#contact">
              Generated Crossword
            </a>
            <a className="btn-green" href="#contact">
              <Link className="nav__link" to={"/login"}>
              Login
              </Link>
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
