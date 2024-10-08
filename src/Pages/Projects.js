// src/pages/Projects.js

import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const Projects = () => {

    const projectData = [
        { title: 'iOS App - Catering Manager', description: 'Swift, Firebase, RestAPI, MVVM', imageUrl: 'cateringManager.png', url: "https://medium.com/@pablocigoy/catering-manager-a-catering-event-management-tool-developed-with-swiftui-dd5fe95964cc", },
        { title: 'iOS App - Mate Mundo', description: 'Swift, Firebase, xCode, MVVM', imageUrl: 'matemundo.png', url: "https://medium.com/@pablocigoy/matemundo-your-ultimate-yerba-mate-marketplace-app-for-ios-50226025e514", },
        { title: 'Andorid App - Kita Adventure', description: 'Kotlin, Android Studio, Figma, MVVM', imageUrl: 'kita.png', url: "https://medium.com/@pablocigoy/case-study-abenteuer-kita-facilitating-communication-and-engagement-in-early-childhood-education-e14857209862" },
        { title: 'Android App -  whatsApp', description: 'Kotlin, Android Studio, Figma', imageUrl: 'whatsApp.png', url: "https://github.com/Pablo-Mdz/WhatsSyntax" },
        { title: 'PRM, UX/UI App design', description: 'UX and UI research with figma', imageUrl: 'prm_img.png', url: "https://medium.com/@pablocigoy/project-resources-management-ein-ux-ui-designprojekt-zur-f%C3%B6rderung-der-effektiven-zusammenarbeit-3a2b3dae2836" },
        { title: 'Notitas von Nadja UX/UI', description: 'UX/UI Comparation between Android and iOS design.', imageUrl: 'notitas-nadja.png', url: "https://medium.com/@pablocigoy/ux-ui-design-comparison-android-vs-ios-9c2559f5c3d1" },
        { title: 'Be Chef - Web page', description: 'JS, React, MongoDB, Express, Tailwind', imageUrl: 'be-chef.png', url: "https://be-chef.netlify.app/", },
        { title: 'Sabor Latino - Web page', description: 'JS, Handlebars, Bootstrap, Express, MongoDB', imageUrl: 'sabor-latino.png', url: "https://thoughtful-cod-cloak.cyclic.app/", },
        { title: 'Padel Americano', description: 'JS, React, CSS', imageUrl: 'padel2.png', url: 'https://padel-americano.netlify.app' },
        { title: 'Save Oliver - Game', description: 'JS, P5', imageUrl: 'oliver.png', url: "https://pablo-mdz.github.io/Game-P5-Shooting/", },
        { title: 'Counter - Truco game', description: 'JS, CSS', imageUrl: 'truco.png', url: "https://dulcet-pudding-105e47.netlify.app/", },
    ];

    return (
        <div id="projects" className="projects-container">
            <h2 className="about-title">Some projects</h2>
            <div className="projects-grid">
                {projectData.map((project, index) => (
                    <a
                        key={index}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                    >
                        <ProjectCard {...project} />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Projects;
