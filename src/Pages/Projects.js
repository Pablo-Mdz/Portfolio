// src/pages/Projects.js

import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const Projects = () => {

    const projectData = [
        { title: 'Be Chef - Web page', description: 'JS, React, MongoDB, Express, Tailwind', imageUrl: 'https://res-console.cloudinary.com/be-chef/thumbnails/transform/v1/image/upload/Yl9hdXRvOnByZWRvbWluYW50LGNfcGFkLGhfMzAwLHdfMzAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/cG9ydGZvbGlvLUltZy9CZS1jaGVm/template_primary', url: "https://be-chef.netlify.app/", },
        { title: 'Padel Americano', description: 'JS, React, CSS', imageUrl: 'https://res-console.cloudinary.com/be-chef/thumbnails/transform/v1/image/upload/Yl9hdXRvOnByZWRvbWluYW50LGNfcGFkLGhfMzAwLHdfMzAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/cG9ydGZvbGlvLUltZy9wYWRlbC1hbWVyaWNhbm8=/template_primary', url: 'https://padel-americano.netlify.app' },
        { title: 'Sabor Latino - Web page', description: 'JS, Handlebars, Bootstrap, Express, MongoDB', imageUrl: 'https://res-console.cloudinary.com/be-chef/thumbnails/transform/v1/image/upload/Yl9hdXRvOnByZWRvbWluYW50LGNfcGFkLGhfMzAwLHdfMzAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/cG9ydGZvbGlvLUltZy9TYWJvci1sYXRpbg==/template_primary', url: "https://thoughtful-cod-cloak.cyclic.app/", },
        { title: 'Save Oliver - Game', description: 'JS, P5', imageUrl: 'https://res-console.cloudinary.com/be-chef/thumbnails/transform/v1/image/upload/Yl9hdXRvOnByZWRvbWluYW50LGNfcGFkLGhfMzAwLHdfMzAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/cG9ydGZvbGlvLUltZy9HYW1lLW9saXZlcg==/template_primary', url: "https://pablo-mdz.github.io/Game-P5-Shooting/", },
        { title: 'Counter - Truco game', description: 'JS, CSS', imageUrl: 'https://res-console.cloudinary.com/be-chef/thumbnails/transform/v1/image/upload/Yl9hdXRvOnByZWRvbWluYW50LGNfcGFkLGhfMzAwLHdfMzAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/cG9ydGZvbGlvLUltZy9UcnVjbw==/template_primary', url: "https://dulcet-pudding-105e47.netlify.app/", },
        { title: 'Sourdough Calculator', description: 'Descripción 2', imageUrl: 'https://res-console.cloudinary.com/be-chef/thumbnails/transform/v1/image/upload/Yl9hdXRvOnByZWRvbWluYW50LGNfcGFkLGhfMzAwLHdfMzAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/cG9ydGZvbGlvLUltZy9zb3VyZG91Z2gtY2FsY3VsYXRvcg==/template_primary', url: "https://github.com/Pablo-Mdz/MasaMadre/blob/main/MasaMadre.py" },
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
