// import React from 'react';
// import './Skills.css';
// import 'font-awesome/css/font-awesome.min.css';
// import KotlinLogo from './kotlinLogoSVG';

// const skillsBar = [
//     {
//         name: "Kotlin",
//         logo: <KotlinLogo/>,
//     },
//     {
//         name: "Figma",
//         faClass: "fab fa-figma",
//     },
//     {
//         name: "HTML5",
//         faClass: "fab fa-html5",
//     },
//     {
//         name: "CSS3",
//         faClass: "fab fa-css3",
//     },
//     {
//         name: "Javascript",
//         faClass: "fab fa-js",
//     },
//     {
//         name: "React",
//         faClass: "fab fa-react",
//     },
//     {
//         name: "Node",
//         faClass: "fab fa-node",
//     },
//     {
//         name: "MongoDB",
//         faClass: "fab fa-mdb",
//     },
//     {
//         name: "Bootstrap",
//         faClass: "fab fa-bootstrap",
//     },
//     {
//         name: "Git",
//         faClass: "fab fa-git",
//     },
//     {
//         name: "Github",
//         faClass: "fab fa-github",
//     },
// ];

// const Skills = () => {
//     return (
//         <div className="skills-container">
//             {skillsBar.map((skill, index) => (
//                 <div className="skill" key={index}>
//                     {skill.logo ? skill.logo : <i className={skill.faClass}></i>}
//                     <p>{skill.name}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Skills;
import React from 'react';
import './Skills.css';
import 'font-awesome/css/font-awesome.min.css';
import KotlinLogo from './kotlinLogoSVG';

const skillsBar = [
    {
        name: "Kotlin",
        logo: <KotlinLogo/>,
        className: "kotlin-logo", // Agrega esta línea
    },
    {
        name: "Swift",
        faClass: "fab fa-swift",
    },
    {
        name: "Figma",
        faClass: "fab fa-figma",
    },
    {
        name: "HTML5",
        faClass: "fab fa-html5",
    },
    {
        name: "CSS3",
        faClass: "fab fa-css3",
    },
    {
        name: "Javascript",
        faClass: "fab fa-js",
    },
    {
        name: "React",
        faClass: "fab fa-react",
    },
    {
        name: "Node",
        faClass: "fab fa-node",
    },
    {
        name: "MongoDB",
        faClass: "fab fa-mdb",
    },
    {
        name: "Bootstrap",
        faClass: "fab fa-bootstrap",
    },
    {
        name: "Git",
        faClass: "fab fa-git",
    },
    {
        name: "Github",
        faClass: "fab fa-github",
    },
];

const Skills = () => {
    return (
        <div className="skills-container">
            {skillsBar.map((skill, index) => (
                <div className={`skill ${skill.className || ''}`} key={index}>
                    {skill.logo ? skill.logo : <i className={skill.faClass}></i>}
                    <p>{skill.name}</p>
                </div>
            ))}
        </div>
    );
};

export default Skills;