import React from 'react';
import googleLogo from '../../assets/google-logo.svg';
import { useGoogleLogin } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

import jwt_decode from 'jwt-decode';

const GoogleAuthLogin = () => {
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
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
          var decoded = jwt_decode(credentialResponse.credential);
          console.log(decoded);
          const expirationDate = new Date(
            Date.now() + 30 * 24 * 60 * 60 * 1000
          ); // 30 days from now
          document.cookie = `isAuthenticated=true; expires=${expirationDate.toUTCString()}; path=/`;
        }}
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
