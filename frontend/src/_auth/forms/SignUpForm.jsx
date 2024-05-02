import React, { useState } from 'react';
import InputComponent from '../../components/InputComponent';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputComponent
        label="Name:"
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleNameChange}
      />
      <InputComponent
        label="Email:"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleEmailChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};



export default SignUpForm;
