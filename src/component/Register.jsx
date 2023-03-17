import React, { useState } from 'react';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic here to submit the form data to a server or external service
    alert("Succesfully registerd")
    console.log('Form submitted:', { firstName, lastName, email, password });
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className='register body1 register-page'>
      <div className='register-container'>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            required
          />

          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            id='lastName'
            name='lastName'
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            required
          />

          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required  autoComplete='username'
          />

          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required   autoComplete='new-password'
          />

          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input
            type='password'
            id='confirmPassword'
            name='confirmPassword'
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required   autoComplete='new-password'
          />

          <button type='submit'>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
