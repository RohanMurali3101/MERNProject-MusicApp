import React from "react";
import "../Styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar">
      <Link className="brand-name" to="/">
        Music Player
      </Link>
      <div className="navbar-inner">
        <Link to="/" id="link-text">
          Home
        </Link>
        <Link to="/signup" id="link-text">
          SignUp
        </Link>
        <Link to="/login" id="link-text">
          Login
        </Link>
        <Link to="/view" id="link-text">
          View Users
        </Link>
        <a href="https://music-stream-app-mernproject.vercel.app/" id="link-text">
          Songs
        </a>
      </div>
    </div>
  );
}

export default Header;
