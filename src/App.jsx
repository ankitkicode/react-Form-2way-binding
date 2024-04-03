import React, { useState } from 'react';

import './App.css';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    checkbox1: false,
    selectOption: '',
    radioOption: ''
  });

  const [formSubmissions, setFormSubmissions] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData(prevState => ({
      ...prevState,
      [name]: newValue
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Append current form data to the array of form submissions
    setFormSubmissions([...formSubmissions, formData]);
    // Clear input fields
    setFormData({
      username: '',
      email: '',
      password: '',
      checkbox1: false,
      selectOption: '',
      radioOption: ''
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="checkbox1">Checkbox 1:</label>
          <input
            type="checkbox"
            id="checkbox1"
            name="checkbox1"
            checked={formData.checkbox1}
            onChange={handleChange}
          />
        </div>
       
        <div>
          <label htmlFor="selectOption">Select Option:</label>
          <select
            id="selectOption"
            name="selectOption"
            value={formData.selectOption}
            onChange={handleChange}
          >
            <option value="">Select...</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
           
          </select>
        </div>
        <div>
          <label>Radio Options:</label>
          <div>
            <input
              type="radio"
              id="radioOption1"
              name="radioOption"
              value="option1"
              checked={formData.radioOption === 'option1'}
              onChange={handleChange}
            />
            <label htmlFor="radioOption1">Option 1</label>
          </div>
          <div>
            <input
              type="radio"
              id="radioOption2"
              name="radioOption"
              value="option2"
              checked={formData.radioOption === 'option2'}
              onChange={handleChange}
            />
            <label htmlFor="radioOption2">Option 2</label>
          </div>
         
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>Form Submissions:</h2>
        <ul>
          {formSubmissions.map((submission, index) => (
            <li key={index}>
              Username: {submission.username}, Email: {submission.email}, Password: {submission.password}, Checkbox 1: {submission.checkbox1 ? 'Checked' : 'Unchecked'}, Checkbox 2: {submission.checkbox2 ? 'Checked' : 'Unchecked'}, Select Option: {submission.selectOption}, Radio Option: {submission.radioOption}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
