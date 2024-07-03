import React from "react";
import { Link } from "react-router-dom";
import broimage from "/Users/divasmishra/Desktop/fitness-tracker/src/Assests/bro_split.webp";
import pplimage from "/Users/divasmishra/Desktop/fitness-tracker/src/Assests/ppl.jpg";

const BroSplit = () => (
  <div className="plan-card">
    <img src={broimage} alt="Bro Split" className="plan-image" />
    <div className="plan-details">
      <h2>Bro Split</h2>
      <p>
        Maximize Muscle Growth with Our Bro Split Training Plan Get stronger,
        build muscle, and transform your body with our proven bro split training
        plan. Our program targets specific muscle groups for maximum growth and
        recovery, with a focus on progressive overload and periodization. Our
        bro split training plan includes: A 4-day workout split routine A
        comprehensive exercise guide Customizable workout schedule Nutrition
        guidance Join the thousands of lifters who have already seen success
        with our program. Start your fitness journey today and get ready to see
        real results!
      </p>
      <Link to="/brosplit" className="know-more-btn">Know More</Link>
    </div>
  </div>
);

const PushPullLeg = () => (
  <div className="plan-card">
    <img src={pplimage} alt="Push Pull Leg" className="plan-image" />
    <div className="plan-details">
      <h2>Push Pull Leg</h2>
      <p>
        Build Strength and Muscle with Our PPL Training Plan Get fit and strong
        with our 6-day push-pull-legs workout routine. Our plan targets specific
        muscle groups for maximum growth and recovery, with a focus on
        progressive overload and periodization. Includes: 6-day workout split
        routine Exercise guide with videos Customizable schedule Nutrition
        guidance Start your fitness journey today and see real results!
      </p>
      <Link to="/pplpage" className="know-more-btn">Know More</Link>
    </div>
  </div>
);

const TrainingPlans = () => (
  <div className="plans-container" id="Training Plans">
    <h1 className="plans-heading">Training Plans</h1>
    <div className="plans-grid">
      <BroSplit />
      <PushPullLeg />
    </div>
  </div>
);

export default TrainingPlans;
