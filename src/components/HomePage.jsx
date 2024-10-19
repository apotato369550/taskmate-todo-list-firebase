// src/components/HomePage.js
import React from "react";
import { Link } from "react-router-dom";
import "./css/HomePage.css"; // Import the CSS file Optional: Add a logo image

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="hero">
        <h1 className="title">Welcome to CheckMate!</h1>
        <p className="subtitle">Your ultimate To-do List.</p>
        <div className="buttons">
          <Link
            to="/taskmate-todo-list-firebase/signup"
            className="btn signup-btn"
          >
            Register Here
          </Link>
          <Link
            to="/taskmate-todo-list-firebase/login"
            className="btn login-btn"
          >
            Login Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
