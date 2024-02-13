import React from 'react'
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css"
const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  };

  return (
    <>
      <header>
        <div className="right">
          <h2>LOGO</h2>
        </div>
        <div className="left">
          <nav ref={navRef}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <button
              className="nav-btn nav-close-btn"
              onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
        </div>
        <button
          className="nav-btn"
          onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </>
  );
}

export default Navbar
