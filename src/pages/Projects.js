import React from 'react'
import "./Projects.css"
import { useState } from 'react'
import Project from '../components/Project/Project'
import projects from "../data/projects.json"


function Projects() {

  const [project, setproject] = useState(projects);

  return (
    <div className='projects-container'>
      <div className='projects-wrapper'>
        <h2>Projects</h2>
        {projects.map( p => <Project project={p} key={p.id} />)}
      </div>
    </div>
  )
}

export default Projects