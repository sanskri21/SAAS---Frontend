import React, { useState } from 'react';
import BBPImage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/barbellbenchpress.webp'
import ChestImage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/chest.jpg'
import InclineBPImage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/inlcinedpress.webp'
import DeclineImage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/decline-bench-press-1024x566-1.webp'
import PeckDeckImage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/pec-deck-alternatives-removebg-preview.png'
import PushupsImages from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/pushups.png'

const ChestWorkout = () => {
  const [showWorkouts, setShowWorkouts] = useState(false);

  const handleButtonClick = () => {
    setShowWorkouts(!showWorkouts);
  };

  return (
    <div className="chest-workout-container"  id="chest">
      <div className="chest-workout-content">
        <div className="text-content">
          <h1>Chest Workout</h1>
          <p>Push your limits and build a stronger chest with these workouts!</p>
          <button onClick={handleButtonClick} className="view-workout-button">
            {showWorkouts ? 'Hide Workouts' : 'View Workouts'}
          </button>
        </div>
        <div className="image-placeholder">
          <img src={ChestImage} alt="Chest Workout" />
        </div>
      </div>
      {showWorkouts && (
        <div className="workout-cards">
          <div className="card">
            <img src={BBPImage} alt="" />
            <h3>Flat Barbell Bench Press</h3>
            <p>Number of Sets: 3<br/>Numbers of Repetition per Set: 12</p>
          </div>
          <div className="card">
            <img src={InclineBPImage} alt="" />
            <h3>Incline Dumbbell Press</h3>
            <p>Number of Sets: 3<br/>Numbers of Repetition per Set: 12</p>
          </div>
          <div className="card">
            <img src={DeclineImage} alt="" />
            <h3>Decline Bench Press</h3>
            <p>Number of Sets: 3<br/>Numbers of Repetition per Set: 12</p>
          </div>
          <div className="card">
            <img src={PeckDeckImage} alt="" />
            <h3>Peck Deck Fly</h3>
            <p>Number of Sets: 3<br/>Numbers of Repetition per Set: 12</p>
          </div>
          <div className="card">
           <img src={PushupsImages} alt="" />
            <h3>Push-Ups</h3>
            <p>Number of Sets: 3<br/>Numbers of Repetition per Set: 12</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChestWorkout;
