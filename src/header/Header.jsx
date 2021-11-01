import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../assets/x.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import { Link, animateScroll as scroll } from "react-scroll";
// import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from "../assets/logo.svg";
import Scroll from 'react-scroll'

import "./header.css";

const ScrollLink = Scroll.ScrollLink
const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header1">
      <div className="logo-nav1">
        <div className="logo-container1">
        &nbsp;&nbsp;
          <Link to="/">
            <img src={`https://firebasestorage.googleapis.com/v0/b/homoeomedicare-935f2.appspot.com/o/Bangalore_Institute_of_Technology_logo.png?alt=media&token=8c4f0082-0552-420d-b0b0-54bace5e209f`} className="logo" />
          </Link>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <ul className={click ? "nav-options1 active" : "nav-options1"}>
          <li className="option1" onClick={closeMobileMenu}>
          <Link
    activeClass="active"
    to="home"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>HOME</Link>
          </li>
          <li className="option1" onClick={closeMobileMenu}>
          <Link
    activeClass="active"
    to="placementProcess"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>PLACEMENT PROCESS</Link>
            
            {/* <Link to="/#placementprocess" onClick={() => window.location.replace("/#placementprocess")}>PLACEMENT PROCESS</Link> */}
          </li>
          <li className="option1" onClick={closeMobileMenu}>
          <Link
    activeClass="active"
    to="placementStats"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>PLACEMENT STATISTICS</Link>
          </li>
          <li className="option1" onClick={closeMobileMenu}>
          <Link
    activeClass="active"
    to="recruiters"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>OUR RECRUITERS</Link>
          </li>
          <li className="option1" onClick={closeMobileMenu}>
            <a href="#">FACILITY</a>
          </li>
          <li className="option1" onClick={closeMobileMenu}>
            <a href="#">ALUMNI FEEDBACK</a>
          </li>
          <li className="option1" onClick={closeMobileMenu}>
            <a href="#">PLACEMENT TEAM</a>
          </li>
          <li className="option1" onClick={closeMobileMenu}>
            <a href="#">CONTACT US</a>
          </li>
          
         
          
        </ul>
      </div>
      
      {/* <ul className="signin-up1"> */}
        {/* <li className="sign-in" onClick={closeMobileMenu}>
          <a href="#">SIGN-IN</a>
        </li> */}
        {/* <li className='sign-in1' onClick={closeMobileMenu}>
          <a href="" className="signup1-btn">
            Login
          </a>
        </li>
      </ul> */}
      <div className="mobile-menu1" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon1" />
        ) : (
          <MenuIcon className="menu-icon1" />
        )}
      </div>
    </div>
  );
};

export default Header;
