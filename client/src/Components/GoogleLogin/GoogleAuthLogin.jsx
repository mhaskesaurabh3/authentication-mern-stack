import React from 'react';
import googleLogo from '../../assets/google-logo.svg';
import { useGoogleLogin } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const GoogleAuthLogin = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async (credentialResponse) => {
    var decoded = jwt_decode(credentialResponse.credential);
    // console.log(decoded);
    let { name, email } = decoded;
    console.log('name', name, 'email: ', email);

    try {
      const response = await axios.post(
        'http://localhost:1337/api/register',
        {
          name: name,
          email: email,
          password: '',
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      let data = await response.data;
      const { token } = data;
      console.log(data);
      if (token) {
        alert('User created successfully');

        // Setting authToken value in cookie
        const expirationDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days from now
        document.cookie = `authToken=${token}; expires=${expirationDate.toUTCString()}; path=/`;

        // Setting isAuthenticated value in cookie
        const isAuthexpirationDate = new Date(
          Date.now() + 30 * 24 * 60 * 60 * 1000
        ); // 30 days from now
        document.cookie = `isAuthenticated=true; expires=${isAuthexpirationDate.toUTCString()}; path=/`;

        navigate('/dashboard');
      } else {
        alert('Please check the details');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log('tokenResponse', tokenResponse);
      console.log('decoded-value', jwt_decode(tokenResponse.access_token));
      localStorage.setItem('token', tokenResponse.access_token);
      const user = {
        userInfo: jwt_decode(tokenResponse.access_token),
      };
      console.log('User', user);
    },
    flow: 'auth-code',
    onError: (errorResponse) => console.log(errorResponse),
  });

  return (
    <>
      <GoogleLogin
        onSuccess={(credentialResponse) =>
          handleGoogleLogin(credentialResponse)
        }
        onError={() => {
          console.log('Login Failed');
        }}
        text='Sign up with Google'
        logo_alignment='left'
        type='standard'
      />
    </>
  );
};

export default GoogleAuthLogin;
