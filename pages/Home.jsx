import React from 'react';
import NavBar from '../components/Home/NavBar';
import Main from '../components/Home/Main';
import Contact from '../components/Home/Contact';
import Diet from '../components/Home/Diet';
import Goal from '../components/Home/Goal';
import Workout from '../components/Home/Workout';
import BMIComponent from '../components/Home/BMIComponent';
import './Home.css'

const Home = () => {
  return (
    <div>
      <NavBar />
      <Main />
      <Goal />
      <Workout />
      <Diet />
      <BMIComponent />
      <Contact />
    </div>
  );
};

export default Home;
