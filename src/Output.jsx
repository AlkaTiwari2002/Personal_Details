import React from 'react';
import './App.css';
import alkaImage from './Images/alka.jpg';

const Output = ({ data }) => {
  const { firstName, lastName, link, hobbies } = data;

  return (
    <div className="output-container">
      <h1>Output</h1>
      <p><strong>First Name:</strong> {firstName}</p>
      <p><strong>Last Name:</strong> {lastName}</p>
      <p><strong>Link:</strong> <a href={link} target="_blank" rel="noopener noreferrer">{link}</a></p>
      <p><strong>Hobbies:</strong></p>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
      <div className="images-container">
        <img src={alkaImage} alt="Alka" />
      </div>
    </div>
  );
};

export default Output;
