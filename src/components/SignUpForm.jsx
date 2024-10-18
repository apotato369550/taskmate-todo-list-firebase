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
      {" "}
      {/* Updated class name */}
      <form className="signup-form" onSubmit={handleSubmit}>
        {" "}
        {/* Updated class name */}
        <h2 className="form-title">Sign Up</h2> {/* Added form-title class */}
        <div className="form-group">
          {" "}
          {/* Wrap label and input */}
          <label htmlFor="email" className="form-label">
            {" "}
            {/* Updated class name */}
            Email:
            <input
              type="text"
              className="form-input"
              onChange={(e) => setEmail(e.target.value)}
            />{" "}
            {/* Updated class name */}
          </label>
        </div>
        <div className="form-group">
          {" "}
          {/* Wrap label and input */}
          <label htmlFor="password" className="form-label">
            {" "}
            {/* Updated class name */}
            Password:
            <input
              type="password"
              className="form-input"
              onChange={(e) => setPassword(e.target.value)}
            />{" "}
            {/* Updated class name */}
          </label>
        </div>
        <button type="submit" className="submit-btn">
          Sign Up
        </button>{" "}
        {/* Updated class name */}
        <p className="redirect-text">
          {" "}
          {/* Updated class name */}
          Already Registered?{" "}
          <Link to="/login" className="redirect-link">
            Login
          </Link>{" "}
          Here! {/* Updated class name */}
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
