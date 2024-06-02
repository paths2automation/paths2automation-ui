import React, { useState } from 'react';
import '../css/ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Data:', formData);
        alert('Form submitted! Check the console for details.');
    };

  return (
    <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>
                Message:
                <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
            </label>
            <button type="submit">Submit</button>
        </form>
  );
};

export default ContactForm;
