import React, { useState } from 'react';
import '../css/SignupForm.css'; // Import CSS file

function SignupForm() {
  const [selectedOption, setSelectedOption] = useState('');
  const [customGender, setCustomGender] = useState('');
  const [showCustomOptions, setShowCustomOptions] = useState(false);
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 120 }, (_, i) => currentYear - i);

  const handleDayChange = (e) => {
    setDay(e.target.value);
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };


  const validateInput = (input) => {
    // Regular expressions for validating mobile number and email address
    const mobileRegex = /^[0-9]{10}$/; // Matches a 10-digit number
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Matches an email address

    return mobileRegex.test(input) || emailRegex.test(input);
  };
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    mobileNumber: '',
    password: '',
    dateOfBirth: '',
    gender: '',
    genderoptional: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = e.target.value;
    setFormData({
      ...formData,
      [name]: value
    });

    setValue(newValue);
    setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInput(value)) {
      // Valid input, proceed with your logic
      console.log("Valid input:", value);
    } else {
      setErrorMessage('Please enter a valid mobile number or email address.');
    }
    console.log(formData); // You can replace this with your form submission logic
  };

  const handleOptionChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);

    // If 'Custom' is selected, show additional options
    if (value === 'custom') {
      setShowCustomOptions(true);
    } else {
      setShowCustomOptions(false);
    }
  };

  const handleCustomGenderChange = (e) => {
    setCustomGender(e.target.value);
  };

  return (
    <div className="signup-container">
      <h1 className="text-center">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className=" row form-group">
          <div className='col-md-6'>  <input type="text" id="firstName" name="firstName" placeholder="First name" value={formData.firstName} onChange={handleChange} required /></div>
          <div className='col-md-6'>  <input type="text" id="surname" name="surname" placeholder="Surname" value={formData.surname} onChange={handleChange} required /></div>
        </div>
        <div className="form-group">
          <input type="text" name="mobile" value={formData.value} onChange={handleChange} placeholder="Mobile number or email address" />
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
        <div className="form-group">
          <input type="password" id="password" name="password" placeholder="New password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className=" row form-group">
          <label>Date of birth</label>
          <div className='col-md-4'>  <select value={day} onChange={handleDayChange}>
            <option value="" disabled>Day</option>
            {days.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select></div>
          <div className='col-md-4'><select value={month} onChange={handleMonthChange}>
            <option value="" disabled>Month</option>
            {months.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select></div>
          <div className='col-md-4'> <select value={year} onChange={handleYearChange}>
            <option value="" disabled>Year</option>
            {years.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select></div>

        </div>
        <div className="row form-group">
          <label>Gender</label>
          <div className='col-md-4 gender'>
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={selectedOption === 'male'}
              onChange={handleOptionChange}
            /></div>
          <div className='col-md-4 gender'> <label htmlFor="female">Female</label><input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={selectedOption === 'female'}
            onChange={handleOptionChange}
          /></div>
          <div className='col-md-4 gender'>
            <label htmlFor="custom">Custom</label>
            <input
              type="radio"
              id="custom"
              name="gender"
              value="custom"
              checked={selectedOption === 'custom'}
              onChange={handleOptionChange}
            />


          </div>

        </div>
        <div className='row form-group'>
          {showCustomOptions && (
            <div className='col-md-12'>
              <select value={customGender} onChange={handleCustomGenderChange}>
                <option value="" disabled>Select your pronoun</option>
                <option value="She:Wish her a happy birthday">She:"Wish her a happy birthday"</option>
                <option value="He:Wish him a happy birthday">He:"Wish him a happy birthday"</option>
                <option value="They:Wish them a happy birthday">They:"Wish them a happy birthday"</option>
              </select>
            </div>

          )}
        </div>
        <div className='row form-group'>
          {showCustomOptions && (
            <div className='col-md-12'>
            <input type="text" id="genderoptional" name="genderoptional" placeholder="Gender (optional)" value={formData.genderoptional} onChange={handleChange} required />
            </div>

          )}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>);
};

export default SignupForm;
