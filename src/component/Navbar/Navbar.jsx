import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import Toggle from "../Toggle/Toggle";
import logo from "../../image/site-logo.png";

function Navbar() {
  const handleButtonClick = () => {
    window.location.href = "mailto:ozanainil@gmail.com";
  };
  return (
    <div className="n-wrapper" id="navbar">
      <div className="n-left">
        <img src={logo} alt="logo" />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="resume" spy={true} smooth={true}>
                Resume
              </Link>
            </li>
            <li>
              <Link to="skills" spy={true} smooth={true}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="projects" spy={true} smooth={true}>
                Projects
              </Link>
            </li>
            <Toggle />
          </ul>
        </div>
        <Link to="contact">
          <button
            className="button n-button"
            style={{ padding: "5px 15px" }}
            onClick={handleButtonClick}
          >
            {/* Mail me <a href="mailto:ozanainil@gmail.com"></a> */}
            Mail me
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
