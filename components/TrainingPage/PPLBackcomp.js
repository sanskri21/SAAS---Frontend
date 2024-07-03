import React, { useState } from 'react';
import BackImage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/back.avif'
import DDLImage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/deadlift-kreuzheben-800x448.jpeg'
import Wchinups from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/Wchinups.png'
import CSrImage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/Chest-Supported-Reverse-Grip-Barbell-Row.webp'
import ShrugImage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/shrug__1_-removebg-preview.png'
import BCurlImage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/Barbell.webp'
import StRvCableImage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/Standing+Cable+Rear+Delt+Fly.jpg'

const PPLBackcomp = () => {
  const [showWorkouts, setShowWorkouts] = useState(false);

  const handleButtonClick = () => {
    setShowWorkouts(!showWorkouts);
  };

  return (
    <div className="back-workout-container" id="pull">
      <div className="back-workout-content">
        <div className="image-placeholder">
          <img src={BackImage} alt="Back Workout" />
        </div>
        <div className="text-content">
          <h1>Pull Workout</h1>
          <p>Strengthen your Back and Biceps with these powerful Pull exercises!</p>
          <button onClick={handleButtonClick} className="view-workout-button">
            {showWorkouts ? 'Hide Workouts' : 'View Workouts'}
          </button>
        </div>
      </div>
      {showWorkouts && (
        <div className="workout-cards">
          <div className="card">
            <img src={DDLImage} alt="" />
            <h3>Dead Lift</h3>
            <p>Number of Sets: 5<br/>Numbers of Repetition per Set: 15</p>
          </div>
          <div className="card">
           <img src={Wchinups} alt="" />
            <h3>(Weighted) Chin-ups</h3>
            <p>Number of Sets: 5<br/>Numbers of Repetition per Set: 15</p>
          </div>
          <div className="card">
            <img src={CSrImage} alt="" />
            <h3>Chest Supported Rows</h3>
            <p>Number of Sets: 5<br/>Numbers of Repetition per Set: 15</p>
          </div>
          <div className="card">
           <img src={ShrugImage} alt="" />
            <h3>Shrugs (Dumbbell, Barbell, or Trap Bar)</h3>
            <p>Number of Sets: 5<br/>Numbers of Repetition per Set: 15</p>
          </div>
          <div className="card">
            <img src={BCurlImage} alt="" />
            <h3>Standing Barbell Curls</h3>
            <p>Number of Sets: 5<br/>Numbers of Repetition per Set: 15</p>
          </div>
          <div className="card">
            <img src={StRvCableImage} alt="" />
            <h3>Standing Cable Reverse Fly</h3>
            <p>Number of Sets: 5<br/>Numbers of Repetition per Set: 15</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PPLBackcomp;
