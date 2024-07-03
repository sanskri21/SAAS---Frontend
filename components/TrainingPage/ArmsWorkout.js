
import React, { useState } from 'react';
import ArmsImage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/triceps.jpg'
import BarbellImage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/Barbell.webp'
import PreacherImage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/Dumbbell_Preacher_Curls-removebg-preview.png'
import InclineImage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/incline-dumbbell-curl-1.jpg'
import DipImage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/dips_2_1000x.webp'
import SkullcrImage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/Skull-Crusher-exercise-long-image.jpg'
import RopePushImage from '/Users/divasmishra/Desktop/fitness-tracker/src/Assests/Ropepushdown.jpg'
const ArmsWorkout = () => {
  const [showWorkouts, setShowWorkouts] = useState(false);

  const handleButtonClick = () => {
    setShowWorkouts(!showWorkouts);
  };

  return (
    <div className="arms-workout-container" id="arms">
      <div className="arms-workout-content">
        <div className="image-placeholder">
          <img src={ArmsImage} alt="Arms Workout" />
        </div>
        <div className="text-content">
          <h1>Arms Workout</h1>
          <p>Sculpt your arms with these powerful exercises!</p>
          <button onClick={handleButtonClick} className="view-workout-button">
            {showWorkouts ? 'Hide Workouts' : 'View Workouts'}
          </button>
        </div>
      </div>
      {showWorkouts && (
        <div className="workout-cards">
          <div className="card">
            <img src={BarbellImage} alt="" />
            <h3>Barbell Bicep Curl</h3>
            <p>Number of Sets: 3<br/>Numbers of Repetition per Set: 12</p>
          </div>
          <div className="card">
            <img src={PreacherImage} alt="" />
            <h3>Preacher Curl</h3>
            <p>Number of Sets: 3<br/>Numbers of Repetition per Set: 12</p>
          </div>
          <div className="card">
            <img src={InclineImage} alt="" />
            <h3>Incline Dumbbell Curl</h3>
            <p>Number of Sets: 3<br/>Numbers of Repetition per Set: 12</p>
          </div>
          <div className="card">
            <img src={DipImage} alt="" />
            <h3>Dip</h3>
            <p>Number of Sets: 3<br/>Numbers of Repetition per Set: 12</p>
          </div>
          <div className="card">
            <img src={SkullcrImage} alt="" />
            <h3>Skullcrusher</h3>
            <p>Number of Sets: 3<br/>Numbers of Repetition per Set: 12</p>
          </div>
          <div className="card">
            <img src={RopePushImage} alt="" />
            <h3>Rope Pressdown</h3>
            <p>Number of Sets: 3<br/>Numbers of Repetition per Set: 12</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArmsWorkout;
