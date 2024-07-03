import React from 'react'
import { Link } from "react-router-dom";
export default function Workout() {
  return (
    <>
      <div className="main-content-left" id="workout">
    <div className="content">
      <h2>Sweat, Motivate, Repeat: Explore Our Workout Plans and Get Inspired!</h2>
      <Link to="/signup" className="signup-btn">Check Plans</Link>
    </div>
    <div className="background-image"></div>
  </div>
    </>
  )
}
