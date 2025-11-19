// src/components/ProjectCard.jsx

import React from 'react';

const GitHubIcon = () => (
    <i className="fab fa-github"></i>
);

const ProjectCard = ({ project }) => {
  return (
    <div className="col-lg-4 col-md-6" data-aos="fade-up">
      <div className="card h-100 shadow-lg project-card">
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text">{project.description}</p>
          
          <div className="tech-tags-container">
            {project.techs.map((tech, index) => (
              <span key={index} className="badge bg-primary tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="card-footer text-center">
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm project-btn">
            <GitHubIcon /> Zobacz na GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;