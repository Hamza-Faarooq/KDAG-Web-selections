import React from 'react';
import styled from 'styled-components';
const SectionContainer = styled.div`
  margin-bottom: 20px;
`;
const SectionTitle = styled.h2`
  color: ${(props) => props.theme.palette.primary.main};
  margin-bottom: 10px;
`;
const SectionList = styled.ul`
  list-style-type: none;
  padding: 0;
`;
const SectionItem = styled.li`
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;
const sectionsData = {
  1: [
    { title: 'Introduction to HTML', description: 'Basic HTML tags and structure' },
    { title: 'Introduction to CSS', description: 'Styling web pages' },
  ],
  2: [
    { title: 'Advanced CSS Techniques', description: 'Flexbox, Grid, etc.' },
    { title: 'Responsive Design', description: 'Making websites mobile-friendly' },
  ],
  // Add more sections for each day or week as needed
};
function CourseSection({ day }) {
  return (
    <SectionContainer>
      <SectionTitle>Day {day} Sections</SectionTitle>
      <SectionList>
        {sectionsData[day] &&
          sectionsData[day].map((section, index) => (
            <SectionItem key={index}>
              <h3>{section.title}</h3>
              <p>{section.description}</p>
            </SectionItem>
          ))}
      </SectionList>
    </SectionContainer>
  );
}
export default CourseSection;
