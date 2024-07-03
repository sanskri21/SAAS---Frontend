import React, { useState } from 'react';
import BackImage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/back.avif'
import DlImage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/deadlift-kreuzheben-800x448.jpeg'
import LpImage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/Lat_Pulldown.png'
import HammerImage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/Hammersrow.webp'
import CableImage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/cable-standing-row.png'
import SarmlatImage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/Straightarmlat.jpg'
const BackWorkout = () => {
  const [showWorkouts, setShowWorkouts] = useState(false);

  const handleButtonClick = () => {
    setShowWorkouts(!showWorkouts);
  };

  return (
    <div className="back-workout-container" id="back">
      <div className="back-workout-content">
        <div className="image-placeholder">
          <img src={BackImage} alt="Back Workout" />
        </div>
        <div className="text-content">
          <h1>Back Workout</h1>
          <p>Strengthen your back with these powerful exercises!</p>
          <button onClick={handleButtonClick} className="view-workout-button">
            {showWorkouts ? 'Hide Workouts' : 'View Workouts'}
          </button>
        </div>
      </div>
      {showWorkouts && (
        <div className="workout-cards">
          <div className="card">
            <img src={DlImage} alt="" />
            <h3>Dead Lift</h3>
            <p>Number of Sets: 3<br/>Numbers of Repetition per Set: 12</p>
          </div>
          <div className="card">
           <img src={LpImage} alt="" />
            <h3>Lat Pull Down</h3>
            <p>Number of Sets: 3<br/>Numbers of Repetition per Set: 12</p>
          </div>
          <div className="card">
            <img src={HammerImage} alt="" />
            <h3>Hammer Strength Row</h3>
            <p>Number of Sets: 3<br/>Numbers of Repetition per Set: 12</p>
          </div>
          <div className="card">
           <img src={CableImage} alt="" />
            <h3>Cable Row</h3>
            <p>Number of Sets: 3<br/>Numbers of Repetition per Set: 12</p>
          </div>
          <div className="card">
            <img src={SarmlatImage} alt="" />
            <h3>Straight Arm Lat Pull Down</h3>
            <p>Number of Sets: 3<br/>Numbers of Repetition per Set: 12</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BackWorkout;
