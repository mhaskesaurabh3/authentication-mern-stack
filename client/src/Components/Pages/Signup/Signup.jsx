import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GoogleAuthLogin from '../../GoogleLogin/GoogleAuthLogin';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const registerUser = async (e) => {
    console.log('button clicked');
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:1337/api/register',
        {
          name: name,
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
      console.log(data);
      if (data.status === 'ok') {
        alert('User created successfully');
        navigate('/login');
      } else {
        alert('Please check the details');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-full max-w-xs flex justify-center items-center'>
        <div className='bg-white border shadow-xl w-96  rounded px-8 pt-6 pb-8 mb-4'>
          <form onSubmit={registerUser}>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='Name'
              >
                Name
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='Name'
                type='text'
                placeholder='Name'
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
                required
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
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className='flex items-center justify-center'>
              <input
                className='bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:cursor-not-allowed disabled:bg-transparent disabled:border disabled:text-black'
                type='submit'
                value='Register'
                disabled={!name || !email || !password}
              />
            </div>
          </form>
          <div className='flex justify-center mt-9'>
            <GoogleAuthLogin />
          </div>
          <div className='mt-3'>
            <span className='font-semibold text-sm'>
              Already have an account?
            </span>
            <Link to='/login'>
              <span className='text-blue-600 text-sm cursor-pointer font-bold underline ml-1'>
                Sign in
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
