import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      This is the home page
      <div className='flex justify-center'>
        <Link to='/login'>
          <button>Go to login</button>
        </Link>
        <Link to='/signup'>
          <button>Go to Signup</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
