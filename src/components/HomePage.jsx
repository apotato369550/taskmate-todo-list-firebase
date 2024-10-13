// src/components/HomePage.js
import React from "react";
import { Link } from "react-router-dom";
import "./css/HomePage.css"; // Import the CSS file Optional: Add a logo image

const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* Optional: Logo at the top */}

      <div className="hero">
        <h1 className="title">Welcome to CheckMate!</h1>
        <p className="subtitle">Your ultimate To-do List.</p>
        <div className="buttons">
          <Link to="/signup" className="btn signup-btn">
            Register Here
          </Link>
          <Link to="/login" className="btn login-btn">
            Login Here
          </Link>
        </div>
      </div>

      {/* Optional: Decorative graphics or illustrations */}
      <div className="decorative-graphics">
        {/* You can add SVGs or images here */}
      </div>
    </div>
  );
};

export default HomePage;
