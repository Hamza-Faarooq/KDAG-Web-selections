import React, { useState } from 'react';
import styled from 'styled-components';
import CourseSection from './CourseSection';
const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
const NavigationTab = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? props.theme.palette.secondary.main : 'transparent')};
  color: ${(props) => (props.isActive ? '#fff' : '#000')};
  border-radius: 5px;
  margin-right: 10px;
`;
const courseData = [
  { day: 1, title: 'Introduction to Web Development', description: 'Basic concepts and tools' },
  { day: 2, title: 'HTML and CSS', description: 'Building web pages' },
  { day: 3, title: 'JavaScript Fundamentals', description: 'Programming basics' },
  // Add more data for each day or week as needed
];
function CoursePage() {
  const [activeDay, setActiveDay] = useState(1);
  const handleDayChange = (day) => {
    setActiveDay(day);
  };
  return (
    <div className="course-page">
      <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#1976d2' }}>Web Development Course</h1>
      <NavigationContainer>
        {courseData.map((item) => (
          <NavigationTab
            key={item.day}
            isActive={activeDay === item.day}
            onClick={() => handleDayChange(item.day)}
          >
            Day {item.day}
          </NavigationTab>
        ))}
      </NavigationContainer>
      <CourseSection day={activeDay} />
    </div>
  );
}
export default CoursePage;
