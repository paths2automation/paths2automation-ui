import React, { useState } from 'react';
import '../css/TextFields.css';
function TextFields() {
    const [inputValue, setInputValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [textareaValue, setTextareaValue] = useState('');
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleEmailChange = (event) => {
        setInputValue(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPasswordValue(event.target.value);
    };

    const handleTextareaChange = (event) => {
        setTextareaValue(event.target.value);
    };

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div>
            <div>
                <label>Text Input: </label>
                <input type="text" className='form-control' value={inputValue} onChange={handleInputChange} />
            </div>
            <div>
                <label>Email Input: </label>
                <input type="email" className='form-control' value={inputValue} onChange={handleEmailChange} />
            </div>
            <div>
                <label>Password Input: </label>
                <input type="password" className='form-control' value={passwordValue} onChange={handlePasswordChange} />
            </div>
            <div>
                <label>Textarea: </label>
                <textarea className='form-control' value={textareaValue} onChange={handleTextareaChange} />
            </div>
            <div>
                <label>Search Input: </label>
                <input type="search" className='form-control' value={searchValue} onChange={handleSearchChange} />
            </div>
        </div>
    );
}

export default TextFields;
