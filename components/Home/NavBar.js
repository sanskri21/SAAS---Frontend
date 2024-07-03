import React from "react";
import { Link } from "react-router-dom";
import CompanyLogo from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/company.png'
export default function NavBar() {
  return (
    <>
     <nav className="navbar">
        <div className="logo">
            <img src={CompanyLogo} alt="Company Logo"/>
        </div>
        <ul className="nav-links">
            <li><a href="#workout" className="btn">Workout Plans</a></li>
            <li><a href="#DietPlanner" className="btn">Diet Plans</a></li>
            <li><a href="#Bmi" className="btn">Bmi Calculator</a></li>
            <li><a href="#contact" className="btn">Contact</a></li>
        </ul>
        <div className="auth-links">
        <Link to="/login" className="btn login">Login</Link>
          <Link to="/signup" className="btn signup">Signup</Link>
        </div>
    </nav>
    </>
  );
}
