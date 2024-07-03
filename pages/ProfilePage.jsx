import React from 'react'
import './Profile.css'
import ActivityCalendar from '../components/Profile/ActivityCalendar'
import NavbarProfile from '../components/Profile/ProfileNav'
import TrainingPlans from '../components/Profile/TrainingPlans'
import Contact from '../components/Home/Contact';
export default function ProfilePage() {
  return (
    <>
      <NavbarProfile/>
      <ActivityCalendar/>
      <TrainingPlans/>
      <Contact/>
    </>
  )
}
