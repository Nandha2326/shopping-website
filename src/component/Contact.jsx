import React, { useState } from 'react';


function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic here to submit the form data to a server or external service
    console.log('Form submitted:', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='body1 contact-us'>
      <div className='contact-us-container'>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' name='name' value={name} onChange={(event) => setName(event.target.value)} required/>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' name='email'value={email} onChange={(event) => setEmail(event.target.value)}required/>
          <label htmlFor='message'>Message</label>
          <textarea id='message'  name='message'rows='5' value={message} onChange={(event) => setMessage(event.target.value)}required/>
          <button type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
