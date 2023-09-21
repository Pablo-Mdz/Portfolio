

import React from 'react';
import './About.css';  
import Skills from '../components/Skills';

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">About Me</h2>
      <p className="about-text">
      As a frontend web developer, I am a proud alumnus of the intensive bootcamp program at Ironhack Berlin. There I gained hands-on experience with HTML5, CSS3, JavaScript, MongoDB, Express, React and Node.js. Currently, I am expanding my skill set by following a mobile app development course at Syntaxt Institut.

In addition to my development skills, I serve as a programming instructor at ReDi bootcamp. This role allows me to share my knowledge and contribute to the growth of aspiring developers, while enhancing my own understanding of basic development concepts and improving my communication and mentoring skills.

My technical skills are complemented by a strong background in teamwork, task optimization and management, skills developed over a decade in fast-paced kitchen environments. I have had the opportunity to work in five different countries, which has given me a diverse perspective on problem solving and adaptability.

I thrive in collaborative environments and am committed to continuous learning and professional growth. Outside of coding, my interests include cooking, traveling and cycling, activities that enrich my life and often bring new perspectives to my work.

I actively seek new challenges and opportunities to apply my development skills and contribute to a dynamic team."

      </p>
      <Skills />
    </div>
  );
};

export default About;
