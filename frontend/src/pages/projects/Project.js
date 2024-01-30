import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Project = () => {

    const [projectId, setProjectId] = useState(useParams()['projectId'])
    const [project, setProject] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3005/api/project/${projectId}`)
            .then(res => res.json())
            .then(data => setProject(data))
    }, [projectId])

    return (
        <div>
            <h1>{project?.name}</h1>
            <p>{project?.description}</p>
        </div>
    )
}

export default Project



