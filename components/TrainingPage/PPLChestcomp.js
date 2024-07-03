import React, { useState } from 'react';
import ChestImage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/chest.jpg'
import BBPImage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/barbellbenchpress.webp'
import SBNImage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/Seatedbehind.jpg'
import WDipsIMage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/wdips.jpg'
import SCableImage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/cable-standing-crossover-muscles-1024x680.png'
import STExImage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/Seated+Overhead+Barbell+Triceps+Extension.jpg'
import StLImage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/Seated+Side+Raises.png'
const PPLChestcomp = () => {
  const [showWorkouts, setShowWorkouts] = useState(false);

  const handleButtonClick = () => {
    setShowWorkouts(!showWorkouts);
  };

  return (
    <div className="chest-workout-container"  id="push">
      <div className="chest-workout-content">
        <div className="text-content">
          <h1>Push Workout</h1>
          <p>Push your limits and build a stronger Chest,Triceps and Shoulders with these workouts!</p>
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
            <p>Number of Sets: 5<br/>Numbers of Repetition per Set: 15</p>
          </div>
          <div className="card">
            <img src={SBNImage} alt="" />
            <h3>Seated Behind the Neck Press</h3>
            <p>Number of Sets: 5<br/>Numbers of Repetition per Set: 15</p>
          </div>
          <div className="card">
            <img src={WDipsIMage} alt="" />
            <h3>(Weighted) Tricep Dips</h3>
            <p>Number of Sets: 5<br/>Numbers of Repetition per Set: 15</p>
          </div>
          <div className="card">
            <img src={SCableImage} alt="" />
            <h3>Standing Cable Crossovers</h3>
            <p>Number of Sets: 5<br/>Numbers of Repetition per Set: 15</p>
          </div>
          <div className="card">
           <img src={STExImage} alt="" />
            <h3>Seated Tricep Extensions</h3>
            <p>Number of Sets: 5<br/>Numbers of Repetition per Set: 15</p>
          </div>
          <div className="card">
           <img src={StLImage} alt="" />
            <h3>Seated Dumbbell Lateral Raises</h3>
            <p>Number of Sets: 5<br/>Numbers of Repetition per Set: 15</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PPLChestcomp;
