// src/pages/Projects.jsx

import React, { useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projectsData.js'; 
import AOS from 'aos'; 

const Projects = () => {
    useEffect(() => {
        AOS.refresh();
    }, []);

    return (
        <main>
            <section id="projekty" className="container">
                <h2 className="mb-5 text-center" data-aos="fade-down">Moje Projekty na GitHub</h2>
                
                <div className="row g-4">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Projects;