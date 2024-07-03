import React, { useState } from 'react';
import ShoulderImage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/shoulder.webp'
import SpressImage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/Shoulder+Press+Machine.jpg'
import ArnoldImage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/Arnold_Press-removebg-preview.png'
import LateralImage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/lateralraises-removebg-preview.png'
import UprightImage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/uprightrow-removebg-preview.png'
import ReverseImage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/reverse-pec-dec-muscles-1024x655.png'
import ShrugImage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/shrug__1_-removebg-preview.png'

const ShoulderWorkout = () => {
  const [showWorkouts, setShowWorkouts] = useState(false);

  const handleButtonClick = () => {
    setShowWorkouts(!showWorkouts);
  };

  return (
    <div className="shoulder-workout-container" id="shoulder">
      <div className="shoulder-workout-content">
        <div className="text-content">
          <h1>Shoulder Workout</h1>
          <p>Build strong shoulders with these effective exercises!</p>
          <button onClick={handleButtonClick} className="view-workout-button">
            {showWorkouts ? 'Hide Workouts' : 'View Workouts'}
          </button>
        </div>
        <div className="image-placeholder">
          <img src={ShoulderImage} alt="Shoulder Workout" />
        </div>
      </div>
      {showWorkouts && (
        <div className="workout-cards">
          <div className="card">
            <img src={SpressImage} alt="" />
            <h3>Seated Shoulder Press</h3>
            <p>Number of Sets: 3<br/>Numbers of Repetition per Set: 12</p>
          </div>
          <div className="card">
            <img src={ArnoldImage} alt="" />
            <h3>Arnold Press</h3>
            <p>Number of Sets: 3<br/>Numbers of Repetition per Set: 12</p>
          </div>
          <div className="card">
            <img src={LateralImage} alt="" />
            <h3>Lateral Raise</h3>
            <p>Number of Sets: 3<br/>Numbers of Repetition per Set: 12</p>
          </div>
          <div className="card">
            <img src={UprightImage} alt="" />
            <h3>Upright Row</h3>
            <p>Number of Sets: 3<br/>Numbers of Repetition per Set: 12</p>
          </div>
          <div className="card">
            <img src={ReverseImage} alt="" />
            <h3>Reverse Fly Machine</h3>
            <p>Number of Sets: 3<br/>Numbers of Repetition per Set: 12</p>
          </div>
          <div className="card">
            <img src={ShrugImage} alt="" />
            <h3>Shrug</h3>
            <p>Number of Sets: 3<br/>Numbers of Repetition per Set: 12</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoulderWorkout;
