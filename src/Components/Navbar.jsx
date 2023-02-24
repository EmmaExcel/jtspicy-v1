import React, { useState } from "react";
import "./Navbar.css";
import logo from "../JTSpice.svg";
import Bars from "./Navimages/bars.png";
import Times from "./Navimages/times.png";
import sidebar from "./Navimages/pngwave.png";

const Navbar = () => {
  const [bars, SetBars] = useState(false);
  
  
  const [click,setClick] = useState(false);

  const openSidebar =()=>{
    setClick(true);
  } 

  const closeSidebar =()=>{
    setClick(false);
  }

  return (
    <>
      <div className="navbar-container">
        <div className="nav-logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="nav-content">
          <nav className="navbar">
            <ul>
              <li className="nav-list">
                <a href="">Home</a>
              </li>
              <li className="nav-list">
                <a href="">About Me</a>
              </li>
              <li className="nav-list">
                <a href="">Experience</a>
              </li>
              <li className="nav-list">
                <a href="">My work</a>
              </li>
              <li className="nav-list">
                <a href="">Work With Me</a>
              </li>
            </ul>
          </nav>

          <div className="bars-container" onClick={openSidebar}>
           
              <img className="bars" src={Bars} />
            
              
          </div>

          <div className={click ? "sidebar-container show":"sidebar-container"}>
            <div className="sidebar-nav">
              <div className="nav-logo">
                <img src={logo} alt="logo" />
              </div>

              <div className="times-container" onClick={closeSidebar}>
                <img src={Times} alt="" />
              </div>
            </div>

            <nav className="sidebar">
              <ul>
                <li className="sidebar-list">
                  <a href="">Home</a>
                </li>
                <li className="sidebar-list">
                  <a href="">About Me</a>
                </li>
                <li className="sidebar-list">
                  <a href="">Experience</a>
                </li>
                <li className="sidebar-list">
                  <a href="">My work</a>
                </li>
                <li className="sidebar-list">
                  <a href="">Work With Me</a>
                </li>
              </ul>
            </nav>

            <div className="sidebar-image">
              <img src={sidebar} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
