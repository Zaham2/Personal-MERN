import React from 'react'

const Landing = () => {
    return (
        <div className='flex flex-col gap-8 p-2 justify-center align-middle h-screen text-center'>
            <img className='rounded-full h-40 w-40 mx-auto' src="https://i.ibb.co/JcxFRjy/me.jpg" alt="me" border="0"></img>
            <div className='flex flex-col gap-3'>
                <h1 className=''>Hi there!</h1>
                <h2 className=''>Welcome to my personal website where I showcase much of the work I've done over the years as a FullStack Developer</h2>
                <h4 className=''>Here you'll find details, samples, links and more of my projects</h4>
                <h4 className=''>And most imporantly, get in touch!</h4>
            </div>
        </div>
    )
}

export default Landing
