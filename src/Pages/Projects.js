// src/pages/Projects.js

import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const Projects = () => {

    const projectList = [
        {
            // Add image in './styles/images.css' in #project1
            id: "project-be-chef",
            name: "Be Chef - Web page",
            skills: [" JS, React, MongoDB, Express, Tailwind"],
            url: "https://be-chef.netlify.app/",
        },
        {
            // Add image in './styles/images.css' in #project2
            id: "project-sabor-latino",
            name: "Sabor Latino - Web page",
            skills: [" JS, Handlebars, Bootstrap, Express, MongoDB"],
            url: "https://thoughtful-cod-cloak.cyclic.app/",
        },
        {
            // Add image in './styles/images.css' in #project3
            id: "project-game",
            name: "Save Oliver - Game",
            skills: [" JS, P5 "],
            url: "https://pablo-mdz.github.io/Game-P5-Shooting/",
        },
        {
            // Add image in './styles/images.css' in #project4
            id: "project-truco",
            name: "Counter - Truco game ",
            skills: [" JS"],
            url: "https://dulcet-pudding-105e47.netlify.app/",
        },
        {
            // Add image in './styles/images.css' in #project5
            id: "project-SD",
            name: "Sourdough Calculator",
            skills: [" CSS, Python, Tkinter"],
            url: "https://github.com/Pablo-Mdz/MasaMadre/blob/main/MasaMadre.py",
        },
        {
            // Add image in './styles/images.css' in #project6
            id: "project-list",
            name: "Contacts list",
            skills: [" CSS, Python, Tkinter"],
            url: "https://github.com/Pablo-Mdz",
        },
    ];

  const projectData = [
    { title: 'Proyecto 1', description: 'Descripción 1', imageUrl: 'https://res-console.cloudinary.com/be-chef/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/ZzFyenhlczgyNG54bmZteHV1b3g=/template_primary' },
    { title: 'Proyecto 2', description: 'Descripción 2', imageUrl: '/images/proyecto2.jpg' },
    { title: 'Proyecto 3', description: 'Descripción 2', imageUrl: '/images/proyecto2.jpg' },
    { title: 'Proyecto 4', description: 'Descripción 2', imageUrl: '/images/proyecto2.jpg' },
    { title: 'Proyecto 5', description: 'Descripción 2', imageUrl: '/images/proyecto2.jpg' },
    { title: 'Proyecto 6', description: 'Descripción 2', imageUrl: '/images/proyecto2.jpg' },
  ];

  return (
    <div id="projects" className="projects-container">
      <h2>Mis Proyectos</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
