import React, { useState } from 'react';
import ReactSpeedometer from "react-d3-speedometer";

const BMIComponent = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(0); // Initialize with 0
  const [bmiCategory, setBmiCategory] = useState('');

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    setBmi(bmiValue);
    determineBMICategory(bmiValue);
  };

  const determineBMICategory = (bmiValue) => {
    if (bmiValue < 18.5) {
      setBmiCategory('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setBmiCategory('Normal weight');
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setBmiCategory('Overweight');
    } else {
      setBmiCategory('Obesity');
    }
  };

  return (
    <div className="bmi-container">
      <h2 id="Bmi">BMI Calculator</h2>
      <p>"Your body is the only place you have to live."</p>
      <div className="bmi-content">
        <div className="bmi-card">
          <h3>Calculate Your BMI</h3>
          <form onSubmit={(e) => { e.preventDefault(); calculateBMI(); }}>
            <div className="form-group">
              <label>Height (cm):</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Weight (kg):</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn calculate-btn">Calculate</button>
          </form>
        </div>
        <div className="bmi-card bmi-gauge-card">
          <h3>Your BMI</h3>
          <div>
            <ReactSpeedometer
              value={bmi}
              minValue={10}
              maxValue={40}
              segments={4}
              segmentColors={['#00BFFF', '#3CB371', '#FFD700', '#FF4500']}
              customSegmentStops={[10, 18.5, 24.9, 29.9, 40]}
              currentValueText={`BMI: ${bmi} - ${bmiCategory}`}
              needleColor="#000080"
              startColor="#00BFFF"
              endColor="#FF4500"
              width={300}
              height={250} 
            />
            {bmi > 0 && (
              <p>Your BMI is <strong>{bmi}</strong> which is considered <strong>{bmiCategory}</strong>.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMIComponent;
