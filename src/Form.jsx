import React, { useState } from 'react';
import './App.css';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    link: '',
    hobby: '',
  });
  const [hobbies, setHobbies] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddHobby = () => {
    if (formData.hobby) {
      setHobbies([...hobbies, formData.hobby]);
      setFormData({ ...formData, hobby: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...formData, hobbies });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label>
        First Name:
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
      </label>
      <label>
        Last Name:
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
      </label>
      <label>
        Link:
        <input type="url" name="link" value={formData.link} onChange={handleChange} required />
      </label>
      <label>
        Hobby:
        <input type="text" name="hobby" value={formData.hobby} onChange={handleChange} />
        <button type="button" onClick={handleAddHobby}>Add Hobby</button>
      </label>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default Form;
