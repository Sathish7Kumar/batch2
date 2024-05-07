import React, { useState } from "react";

import { Link } from "react-router-dom";

import './Nav.css'

const SampleNav = () => {

  const [showNav, setshowNav] = useState(false);

//   showNav = False  , !showNav =  True

  const toogle = () => {
    setshowNav(!showNav); // true // false // true
  };

  console.log("re-render");
  
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link to="/"> 
          MY PAGE</Link>
        </div>

        <div
          style={{ color: "red", fontSize: "35px" }}
          className="icon"
          onClick={toogle}
        >
            X
          {/* <TbLayoutNavbarFilled /> */}
        </div>

        {/* <ul className="nav-links show">
        <li> tags
        </ul> */}

        <ul className={`nav-links ${showNav ? "show" : ""}`}>
            <li><Link to='/state' >State</Link></li>
            <li><Link  to='/effect' >Effect</Link></li>
            <li><Link  to='/reducer' >Reducer</Link></li>
            <li><Link  to='/classprops' >Class Props</Link></li>
            <li><Link  to='/vote' >Vote</Link></li>
        </ul>

      </div>
    </>
  );
};

export default SampleNav;