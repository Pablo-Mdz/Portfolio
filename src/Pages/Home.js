
// import React from 'react';
// import './Home.css';

// const Home = () => {
//   return (
//     <div className='home-container'>
//           <img src="3.jpeg" alt="Profile" className="profile-img" />
//       <h1 className='home-title'>Welcome to My Portfolio</h1>
//       <p className='home-text'>
//         Hi, I'm Pablo Cigoy. I'm a junior developer specialized in React.
//       </p>
//     </div>
//   );
// };

// export default Home;
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
             Frontend developer & UX/UI designer
          </div>
        </div>
        <div className="button">
          <div className="contact2">Contact</div>
        </div>
      </div>
      <img
        className="header-image-1"
        src={process.env.PUBLIC_URL + '/3.jpeg'}
        alt="my picture"
      />
    </div>
  );
};

export default Home;
