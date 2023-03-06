import React from 'react'
import "./Projects.css"
import Project from '../components/Project/Project'
import projects from "../data/projects.json"

function Projects() {

  return (
    <div className='projects-container'>
      <div className='projects-wrapper'>
        <h2>Projects</h2>
        <div className='project-wrapper'>
          
          // Looping through the the projects.json object and rendering each project dinamically
          {projects.map( p => <Project project={p} key={p.id} />)}
        </div>
      </div>
    </div>
  )
}

export default Projects