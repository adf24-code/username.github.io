import React, { useState } from "react";
import "./Header.css";
import { useLocation } from "react-router-dom";
import logo from "./../../Assets/logo.svg";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Header = () => {
  const location = useLocation();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <header className="header">
        <img
          src={logo}
          alt="Journal Website Logo"
          style={{
            marginTop: "50px",
          }}
        />
        <div className="nav-container">
          <nav className="nav">
            <a
              href="/"
              className={location.pathname === "/" ? "active-link" : ""}
            >
              Home
            </a>
            <a
              href="/authorguide"
              className={
                location.pathname === "/authorguide" ? "active-link" : ""
              }
            >
              Guidelines
            </a>
            <a
              href="/resources"
              className={
                location.pathname === "/resources" ? "active-link" : ""
              }
            >
              Resources
            </a>
            <a
              className={
                location.pathname === "/contactus" ||
                location.pathname === "/editorial" ||
                location.pathname === "/announcement"
                  ? "active-link"
                  : ""
              }
              onClick={toggleDropdown}
            >
              About
              {isDropdownOpen ? (
                <FaChevronUp className="dropdown-icon" />
              ) : (
                <FaChevronDown className="dropdown-icon" />
              )}
              {isDropdownOpen && (
                <div className="dropdown">
                  <a href="/announcement">Announcement</a>
                  <a href="/editorial">Editorial Board</a>
                  <a href="/contactus">Contact us</a>
                </div>
              )}
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
