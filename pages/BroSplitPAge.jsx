import React from 'react'
import './TrainingPage.css'
// import NavbarProfile from '../components/Profile/ProfileNav'
import BroSplitPlan from '../components/TrainingPage/BroSplitPlan'
import ChestWorkout from '../components/TrainingPage/ChestWorkout'
import BackWorkout from '../components/TrainingPage/BackWorkout'
import ShoulderWorkout from '../components/TrainingPage/ShoulderWorkout'
import ArmsWorkout from '../components/TrainingPage/ArmsWorkout'
import LegWorkout from '../components/TrainingPage/LegWorkout'
import BroNav from '../components/TrainingPage/BroNav'
import Contact from '../components/Home/Contact';
export default function BroSplitPAge() {
  return (
    <>
      <BroNav/>
      <BroSplitPlan/>
      <ChestWorkout/>
      <BackWorkout/>
      <ShoulderWorkout/>
      <ArmsWorkout/>
      <LegWorkout/>
      <Contact/>
    </>
  )
}
