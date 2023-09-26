// src/pages/Projects.js

import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const Projects = () => {
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
