
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="header-section">
      <div className="header-content">
        <div className="title-subtitle">
          <div className="branding-image-making">Developer | Designer</div>
          <div className="visual-designer">Pablo Cigoy</div>
          <div className="first-text">
             Mobile App developer | Frontend developer | UX/UI designer
          </div>
        </div>
        {/* <div className="button">
          <div className="contact2">Contact</div>
        </div> */}
      </div>
      <img
      className="header-image-1"
        src={process.env.PUBLIC_URL + '/3.jpeg'}
        alt="myPicture"
      />
    </div>
  );
};

export default Home;
