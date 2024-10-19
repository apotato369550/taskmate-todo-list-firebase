// src/components/LoginForm.js

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./css/LoginForm.css"; // Import the CSS file

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error messages
  const navigate = useNavigate(); // Get the navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login Successfully");
      navigate("/"); // Redirect to ToDoList (Home) after successful login
    } catch (err) {
      console.log(err);
      setError("Invalid email or password. Please try again."); // Set error message
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Login</h2>
        {error && <p className="error-message">{error}</p>}{" "}
        {/* Display error message */}
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email:
            <input
              type="email"
              id="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password:
            <input
              type="password"
              id="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </label>
        </div>
        <button type="submit" className="submit-btn">
          Login
        </button>
        <p className="redirect-text">
          Don't have an account?{" "}
          <Link
            to="/taskmate-todo-list-firebase/signup"
            className="redirect-link"
          >
            Register Here!
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
