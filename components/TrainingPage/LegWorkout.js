import LegImage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/legs.jpg'
import React, { useState } from 'react';
import BackSquatImage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/BarbellBackSquat.png'
import HackSquatImage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/HackSquat.png'
import LegpressImage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/leg-press-00.jpg'
import LegExtension from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/legpress.webp'
import CalfRaiseImage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/calfraise.png'

const LegWorkout = () => {
  const [showWorkouts, setShowWorkouts] = useState(false);

  const handleButtonClick = () => {
    setShowWorkouts(!showWorkouts);
  };

  return (
    <div className="leg-workout-container" id="leg" >
      <div className="leg-workout-content">
        <div className="text-content">
          <h1>Leg Workout</h1>
          <p>Strengthen your legs with these effective exercises!</p>
          <button onClick={handleButtonClick} className="view-workout-button">
            {showWorkouts ? 'Hide Workouts' : 'View Workouts'}
          </button>
        </div>
        <div className="image-placeholder">
          <img src={LegImage} alt="Leg Workout" />
        </div>
      </div>
      {showWorkouts && (
        <div className="workout-cards">
          <div className="card">
           <img src={BackSquatImage} alt="" />
            <h3>Barbell Back Squat</h3>
            <p>Number of Sets: 3<br/>Numbers of Repetition per Set: 12</p>
          </div>
          <div className="card">
            <img src={HackSquatImage} alt="" />
            <h3>Machine Hack Squat</h3>
            <p>Number of Sets: 3<br/>Numbers of Repetition per Set: 12</p>
          </div>
          <div className="card">
            <img src={LegpressImage} alt="" />
            <h3>Leg Press</h3>
            <p>Number of Sets: 3<br/>Numbers of Repetition per Set: 12</p>
          </div>
          <div className="card">
            <img src={LegExtension} alt="" />
            <h3>Leg Extension</h3>
            <p>Number of Sets: 3<br/>Numbers of Repetition per Set: 12</p>
          </div>
          <div className="card">
            <img src={CalfRaiseImage} alt="" />
            <h3>Calf Raise</h3>
            <p>Number of Sets: 3<br/>Numbers of Repetition per Set: 12</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LegWorkout;
