import React from "react";
import { useState } from 'react'
import { Link } from 'react-router-dom'; 
import Logo from "../assets/Logo";

import "/src/css/Topbar.css"


const Topbar = () => {

    const [isActive, setIsActive] = useState(false);

    const toggleActiveClass = () => {
      setIsActive(!isActive);
    };

    const removeActive = () => {
      setIsActive(false)
    }

  return (
    <header className="navbar">

      <Logo />

      <ul className="nav-list">
        <li className="nav-link">
          <Link to="/">Home</Link>
        </li>
         <li className="nav-link">
          <Link to="/menu">Menu</Link>
        </li>
         <li className="nav-link">
          <Link to="/about">About</Link>
        </li>
         <li className="nav-link">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      {/* <img className="accountImage" src="../assets/blankProfilePic.png" alt="image"/> */}
      
    </header>
  );
};

export default Topbar;
