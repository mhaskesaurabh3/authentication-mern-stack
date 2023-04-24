import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import GoogleAuthLogin from './GoogleLogin/GoogleAuthLogin';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const userLogin = async (e) => {
    console.log('button clicked');
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:1337/api/login',
        {
          email: email,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      let data = await response.data;
      console.log(data.token);
      if (data.token) {
        alert('Login successful');
        localStorage.setItem('token', data.token);
        navigate('/dashboard');
      } else {
        alert('Please check username and password');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className='w-full max-w-xs flex justify-center items-center'>
        <div className='bg-white shadow-md w-96 h-96 rounded px-8 pt-6 pb-8 mb-4'>
          <form onSubmit={userLogin}>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='email'
              >
                Email
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='email'
                type='email'
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='mb-6'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='password'
              >
                Password
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                id='password'
                type='password'
                placeholder='******************'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='flex items-center justify-between'>
              <input
                className='bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='submit'
                value='Register'
              />

              <a
                className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'
                href='#'
              >
                Forgot Password?
              </a>
            </div>
          </form>
          <div className='flex justify-center mt-9'>
            <GoogleAuthLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
