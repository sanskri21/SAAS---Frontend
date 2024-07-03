import React from 'react'
import { Link } from "react-router-dom";
export default function Contact() {
  return (
    <>
      <div className="footer" id="contact">
    <div className="logo">
      <div className="simple-footer">
        <p>&copy; 2024  SAAS, Your Personal Fitness Assistant. All rights reserved.</p>
      </div>
    </div>
    <div className="footer-grid">
      <div className="footer-column">
        <h3>Help</h3>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Links</h3>
        <ul>
          <li><a href="#DietPlanner">Diet Planner</a></li>
          <li><a href="#workoutplans">Workout</a></li>
          <li><a href="#Bmi">BMI Calculator</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Contact Us</h3>
        <ul>
          <li><a href="https://www.instagram.com/diva.s__/">Instagram</a></li>
          <li><a href="https://x.com/Abhinav75820606">Twitter</a></li>
          <li><a href="/">Gmail</a></li>
        </ul>
      </div>
    </div>
  </div>
    </>
  )
}
