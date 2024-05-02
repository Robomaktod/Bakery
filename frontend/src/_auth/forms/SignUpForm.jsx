import React, { useState } from 'react';
import InputComponent from '../../components/InputComponent';

import "../../css/RegForms.css"

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) =>{
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign up</h1>
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
      <InputComponent
        label="Password:"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};



export default SignUpForm;
