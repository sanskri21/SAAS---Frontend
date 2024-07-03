import React, { useState, useEffect, useCallback } from 'react';
import Calendar from 'react-calendar';
import { useAuth } from '../../context/AuthContext';

const ActivityCalendar = () => {
  const { user } = useAuth();
  const [activeDays, setActiveDays] = useState(0); // State to keep track of active days
  const [calendarData, setCalendarData] = useState({}); // State to store calendar data

  // Fetch user activity data from the backend
  const fetchUserActivityData = useCallback((userId) => {
    // console.log('Fetching activity data for user:', userId);
    // fetch(`http://localhost:5001/api/auth/activity/${userId}`,
    fetch(`https://saas-backend-5.onrender.com/api/auth/activity/${userId}`, {
      method: 'POST', // POST request to record activity
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.activityData) {
          // console.log('Activity data fetched:', data.activityData);
          setCalendarData(data.activityData); // Set calendar data
          calculateActiveDays(data.activityData); // Calculate active days
        } else {
          console.log('No activity data found');
        }
      })
      .catch((error) => console.error('Error fetching activity data:', error));
  }, []);

  // Fetch user activity data when user logs in or component mounts
  useEffect(() => {
    if (user) {
      // console.log('User found:', user);
      fetchUserActivityData(user._id);
    }
  }, [user, fetchUserActivityData]);

  // Calculate the number of active days from the calendar data
  const calculateActiveDays = (data) => {
    let count = 0;
    for (const date in data) {
      if (data[date] === 'visited') {
        count++;
      }
    }
    // console.log('Active days calculated:', count);
    setActiveDays(count); // Update active days state
  };

  // Function to determine the class for each calendar tile
  const tileClassName = ({ date }) => {
    const currentDate = new Date().toLocaleDateString('en-CA');
    const calendarDate = date.toLocaleDateString('en-CA');
    let className = '';

    if (calendarData[calendarDate] === 'visited') {
      className = 'visited'; // Mark as visited if the date is recorded
    } else if (calendarDate < currentDate) {
      className = 'not-visited'; // Mark as not visited if the date is in the past
    }

    if (calendarDate === currentDate) {
      className += ' current-day'; // Mark as current day if the date is today
    }

    return className;
  };
  return (
    <div className="activity-calendar-container">
     <div className="left-column">
        <h2>Your Activity Calendar</h2>
        <p className="motivation-line">Stay consistent to achieve your goals!</p>
        <div className="active-days-info">
          <h3>Your Maximum Active Days</h3>
          <p className="active-days-count">{activeDays}</p>
        </div>
      </div>
      <div className="calendar-container">
        <Calendar tileClassName={tileClassName} /> {/* Render the calendar */}
      </div>
    </div>
  );
};

export default ActivityCalendar;
