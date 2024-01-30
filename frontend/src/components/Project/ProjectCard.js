import React from 'react'

function ProjectCard(props) {

    const { name, description } = props

    return (
        <div onClick={(e) => {
            e.preventDefault();
        }} className="hover:border hover:shadow-none shadow-[1px_1px_3px_#e6e6e6] rounded-lg bg-gradient-to-br from-violet-400 to-violet-900 flex flex-col justify-center my-4 mx-4 w-4/12 h-20 opacity-85 ">
            <h1 className="mx-auto">{name}</h1>
            <h6 className='mx-auto'>{description}</h6>
            <button>Click me</button>
        </div>
    )
}

export default ProjectCard
