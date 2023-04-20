import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Login.css';
import axios from 'axios';
import { useState } from 'react';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = async (e) => {
    console.log('button clicked');
    e.preventDefault();
    const response = await axios.post(
      'http://localhost:1337/api/register',
      JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={registerUser} className='login_container'>
        <TextField
          id='outlined-basic'
          label='Username'
          variant='outlined'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <TextField
          label='Email'
          variant='outlined'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <TextField
          label='Password'
          variant='outlined'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <TextField type='submit' value='Register' />
      </form>
    </div>
  );
};

export default Login;
