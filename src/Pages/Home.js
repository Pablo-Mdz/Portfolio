
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className='home-container'>
          <img src="3.jpeg" alt="Profile" className="profile-img" />
      <h1 className='home-title'>Welcome to My Portfolio</h1>
      <p className='home-text'>
        Hi, I'm Pablo Cigoy. I'm a junior developer specialized in React.
      </p>
    </div>
  );
};

export default Home;
