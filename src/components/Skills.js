// src/components/Skills.js

import React from 'react';
import './Skills.css';
import 'font-awesome/css/font-awesome.min.css';



const skillsBar = [
    {
        name: "HTML5",
        // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
        // svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
        faClass: "fab fa-html5",
    },
    {
        name: "CSS3",
        // svg: '',
        faClass: "fab fa-css3",
    },
    {
        name: "Javascript",
        // svg: '',
        faClass: "fab fa-js",
    },
    {
        name: "React",
        // svg: '',
        faClass: "fab fa-react",
    },
    {
        name: "Node",
        // svg: '',
        faClass: "fab fa-node",
    },
    {
        name: "Python",
        // svg: '',
        faClass: "fab fa-python",
    },
    {
        name: "Bootstrap",
        // svg: '',
        faClass: "fab fa-bootstrap",
    },
    {
        name: "Git",
        // svg: '',
        faClass: "fab fa-git",
    },
    {
        name: "Github",
        // svg: '',
        faClass: "fab fa-github",
    },
    {
        name: "MongoDB",
        // svg: '',
        faClass: "fab fa-mdb",
    },
];


const Skills = () => {
    return (
        <div className="skills-container">
            {skillsBar.map((skill, index) => (
                <div className="skill" key={index}>
                    <i className={skill.faClass}></i>
                    <p>{skill.name}</p>
                </div>
            ))}
        </div>
    );
};

export default Skills;
