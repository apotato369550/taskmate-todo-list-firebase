import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./css/SignUpForm.css"; // Import the updated CSS file

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Get the navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Account created.");
      navigate("/"); // Redirect to ToDoList (Home) after successful sign up
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Sign Up</h2> 
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email:
            <input
              type="text"
              className="form-input"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password:
            <input
              type="password"
              className="form-input"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button type="submit" className="submit-btn">
          Sign Up
        </button>
        <p className="redirect-text">
          
          Already Registered?
          <Link
            to="/taskmate-todo-list-firebase/login"
            className="redirect-link"
          >
            Login
          </Link>
          Here! 
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
