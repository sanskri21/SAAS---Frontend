import React from 'react'
import './PPLpage.css'
import BroNav from '../components/TrainingPage/BroNav'
import PPLmain from '../components/TrainingPage/PPLmain'
import PPLChestcomp from '../components/TrainingPage/PPLChestcomp'
import PPLBackcomp from '../components/TrainingPage/PPLBackcomp'
import PPLLegcomp from '../components/TrainingPage/PPLLegcomp'
import Contact from '../components/Home/Contact';

export default function PPLpage() {
  return (
    <>
      <BroNav/>
      <PPLmain/>
      <PPLChestcomp/>
      <PPLBackcomp/>
      <PPLLegcomp/>
      <Contact/>
    </>
  )
}
