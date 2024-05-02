import React, { useState } from 'react';
import InputComponent from '../../components/InputComponent';
import "../../css/RegForms.css"

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) =>{
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }


  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h1 className='signUp'>Sign up</h1>
      <div className='namesInput'>
      <InputComponent
        label="First name:"
        type="text"
        placeholder="Enter your fisrt name"
        value={name}
        onChange={handleNameChange}
      />
       <InputComponent
        label="Last name:"
        type="text"
        placeholder="Enter your last name"
        value={name}
        onChange={handleNameChange}
      />
      </div>
      <InputComponent
        label="Email:"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleEmailChange}
      />
      <InputComponent
        className="password-input"
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
