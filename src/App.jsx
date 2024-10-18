import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import ToDoList from "./components/ToDoList";
import HomePage from "./components/HomePage";

function App() {
  const [user, setUser] = useState(null); // Track the logged-in user

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // If user is logged in, set the user
      } else {
        setUser(null); // If no user, set to null
      }
    });

    return () => {
      unsubscribe(); // Cleanup subscription on unmount
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Conditionally render components based on login state */}
        {user ? (
          // If user is logged in, show the ToDoList
          <Route
            path="/"
            element={
              <ToDoList setLogin={() => setUser(null)} username={user.email} />
            }
          />
        ) : (
          // If user is not logged in, show home page with login/signup options
          <>
            <Route
              path="/taskmate-todo-list-firebase/"
              element={<HomePage />}
            />
            <Route
              path="/taskmate-todo-list-firebase/login"
              element={<LoginForm />}
            />
            <Route
              path="/taskmate-todo-list-firebase/signup"
              element={<SignUpForm />}
            />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
