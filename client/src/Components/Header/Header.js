import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../image/logo7.jpg';
import "./Header.css";

const Header = () => {
  const [showbar, setShowbar] = useState(false);

  return (
    <>
      <nav className="main-nav bg-white/50 backdrop-blur-sm">
        <div className="logo">
          <h2>
            <Link to="/">
            <img src={logo} className="logo" alt="logo"/>
            </Link>           
          </h2>
        </div>
        <div className={showbar ? "menu-link mobile-menu-link" : "menu-link"}>
          <ul>
            <li className="">
              <Link to="/" className="navbar-icon" style={{"color":"white"}}>HOME</Link>
            </li>
            <li>
              <Link to="/gallery" style={{"color":"white"}}>GALLERY</Link>
            </li>
            <li>
              <Link to="/video" style={{"color":"white"}}>VIDEO</Link>
            </li>
            {/* <li>
              <Link to="/PreWedding" style={{"color":"gold"}}>PreWedding</Link>
            </li> */}
            <li>
              <Link to="/faq" style={{"color":"white"}}>FAQ</Link>
            </li>
            <li>
              <Link to="/contactUs" style={{"color":"white"}}>CONTACT</Link>
            </li>
            
          </ul>
        </div>
        <div className="social-media">
          <div className="hamburger-menu">
            <button
              className="btn"
              href="#"
              onClick={() => setShowbar(!showbar)}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
