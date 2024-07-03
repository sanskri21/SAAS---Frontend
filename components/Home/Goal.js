import React from "react";
import { Link } from "react-router-dom";
import myImage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/Thinking1.jpeg'; // Import your image file
export default function Goal() {
  return (
    <>
      <div className="goal-container">
        <div className="goal-content">
          <h2 className="goal-heading">When you have a clear vision <br/> of your goal, it’s easier to take<br/> the first step toward it.</h2>
          <Link to="/signup" className="btn getting-started">
            Getting Started
          </Link>
        </div>
        <div className="goal-image">
        <img src={myImage} alt="Description of the..." />
        </div>
      </div>
    </>
  );
}
