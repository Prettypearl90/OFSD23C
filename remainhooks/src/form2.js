import React, { useState } from 'react';

const FormExample = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    gender: 'male',
    subscribe: false,
    newsletterFrequency: 'weekly',
    favoriteColor: 'blue',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Handle different form element types
    const inputValue = type === 'checkbox' ? checked : value;

    setFormData({ ...formData, [name]: inputValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data, e.g., submit to a server
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
      </label>
      <br />

      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <br />

      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />

      <label>
        Gender:
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <br />

      <label>
        Subscribe to newsletter:
        <input
          type="checkbox"
          name="subscribe"
          checked={formData.subscribe}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Newsletter Frequency:
        <div>
          <input
            type="radio"
            name="newsletterFrequency"
            value="daily"
            checked={formData.newsletterFrequency === 'daily'}
            onChange={handleChange}
          />
          Daily
          <input
            type="radio"
            name="newsletterFrequency"
            value="weekly"
            checked={formData.newsletterFrequency === 'weekly'}
            onChange={handleChange}
          />
          Weekly
        </div>
      </label>
      <br />

      <label>
        Favorite Color:
        <select name="favoriteColor" value={formData.favoriteColor} onChange={handleChange}>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
      </label>
      <br />

      <label>
        Comments:
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
        />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormExample;
