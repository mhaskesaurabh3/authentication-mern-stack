import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import GoogleAuthLogin from '../../GoogleLogin/GoogleAuthLogin';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [previousLocation, setPreviousLocation] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  console.log('location', location);

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

        // Setting authToken value in cookie
        const expirationDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days from now
        document.cookie = `authToken=${
          data.token
        }; expires=${expirationDate.toUTCString()}; path=/`;

        // Setting isAuthenticated value in cookie
        const isAuthexpirationDate = new Date(
          Date.now() + 30 * 24 * 60 * 60 * 1000
        ); // 30 days from now
        document.cookie = `isAuthenticated=true; expires=${isAuthexpirationDate.toUTCString()}; path=/`;
        navigate('/dashboard');
      } else {
        alert('Please check username and password');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Get all cookies as a semicolon-separated string
    const cookieString = document.cookie;
    // Split the cookie string into an array of individual cookies
    const cookies = cookieString.split('; ');
    // Loop through the cookies to find the ones you're interested in
    let isAuthenticated, authToken;
    cookies.forEach((cookie) => {
      const [name, value] = cookie.split('=');
      if (name === 'isAuthenticated') {
        isAuthenticated = value;
      } else if (name === 'authToken') {
        authToken = value;
      }
    });
    if (isAuthenticated && authToken) {
      navigate(-1);
    }
  }, []);

  useEffect(() => {
    setPreviousLocation(location);
  }, [location]);

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-full flex justify-center items-center max-w-xs '>
        <div className='bg-white border shadow-xl w-96  rounded px-8 pt-6 pb-8 mb-4'>
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
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='flex items-center justify-between'>
              <input
                className='bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:cursor-not-allowed disabled:bg-transparent disabled:border disabled:text-black'
                type='submit'
                value='Register'
                disabled={!email || !password}
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
          <div className='mt-5'>
            <span className='font-semibold text-sm'>New User? </span>
            <Link to='/signup'>
              <span className='text-blue-600 text-sm cursor-pointer font-bold underline '>
                Create an account
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
