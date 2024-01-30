import React, { useEffect, useState } from 'react'
import ProjectCard from '../../components/Project/ProjectCard'

const Projects = () => {

    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('http://localhost:3005/api/project')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <div className='flex flex-col justify-center align-middle h-screen m-auto'>
            <h1 className="mx-auto text-4xl">Projects</h1>
            <p className="mx-auto">Learning web developemnt is so enjoyable.</p>
            <p className="mx-auto">Here are some of my projects.</p>
            <div className='flex justify-center flex-wrap' >{
                projects.map((project, index) => {
                    return <ProjectCard key={index} name={project.name} description={project.description} status={project.status} technologies={project.technologies} />
                })}
            </div>
        </div>
    )

}

export default Projects
