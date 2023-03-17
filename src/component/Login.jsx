import React, { useState } from 'react';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic here to submit the form data to a server or external service
    alert("form has been submitted")
    console.log('Form submitted:', { email, password });
    setEmail('');
    setPassword('');
  };

  return (
    <div className='login body1'>
      <div className='login-container'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
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
            required   autoComplete='current-password'
          />
    
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;

