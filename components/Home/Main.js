import React from "react";
import { Link } from "react-router-dom";
export default function Main() {
  return (
    <>
      <main className="main-content">
        <div className="text-content1">
          <h1>Sweat out all those bad vibes</h1>
          <p>
            Join our community and start your journey to a healthier, happier
            you. Enjoy personalized workout plans, nutrition guides, and more.
          </p>
          <Link to="/signup" className="btn signup large">
            Sign Up
          </Link>
          <p className="small-text">
            Already have an account?{" "}
            <Link to="/login" className="login-link">
              Login
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
