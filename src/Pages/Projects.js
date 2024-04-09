// src/pages/Projects.js

import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const Projects = () => {

    const projectData = [
        { title: 'Andorid App Kita Adventure', description: 'Kotlin, figma', imageUrl: 'kita.png', url: "https://github.com/SI-Classroom-Batch-013/android-abschluss-Pablo-Mdz" },
        { title: 'Android App  whatsApp', description: 'Kotlin, figma', imageUrl: 'whatsApp.png', url: "https://github.com/Pablo-Mdz/WhatsSyntax" },
        { title: 'Be Chef - Web page', description: 'JS, React, MongoDB, Express, Tailwind', imageUrl: 'be-chef.png', url: "https://be-chef.netlify.app/", },
        { title: 'Padel Americano', description: 'JS, React, CSS', imageUrl: 'padel2.png', url: 'https://padel-americano.netlify.app' },
        { title: 'Sabor Latino - Web page', description: 'JS, Handlebars, Bootstrap, Express, MongoDB', imageUrl: 'sabor-latino.png', url: "https://thoughtful-cod-cloak.cyclic.app/", },
        { title: 'Save Oliver - Game', description: 'JS, P5', imageUrl: 'oliver.png', url: "https://pablo-mdz.github.io/Game-P5-Shooting/", },
        // { title: 'Counter - Truco game', description: 'JS, CSS', imageUrl: 'truco.png', url: "https://dulcet-pudding-105e47.netlify.app/", },
    ];

    return (
        <div id="projects" className="projects-container">
            <h2>Some projects</h2>
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
