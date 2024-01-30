import React from 'react'

const About = () => {
    return (
        <div className='flex flex-col justify-center align-middle h-screen text-center gap-12 my-auto p-2'>
            <div>
                <img className=' relative mt-24 rounded-full h-40 w-40 mx-auto' src="https://i.ibb.co/JcxFRjy/me.jpg" alt="me" border="0"></img>
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className=''>Hi there!</h1>
                <h2 className=''>Welcome to my personal website where I showcase much of the work I've done over the years as a FullStack Developer</h2>
                <h4 className=''>Here you'll find details, samples, links and more of my projects</h4>
                <h4 className=''>And most imporantly, get in touch!</h4>
            </div>

            <div className='flex flex-col gap-3'>
                <h2 className='text-2xl '>Who am I?</h2>
                <p className=''>I'm a FullStack Software Engineer residing in Egypt</p>
                <p className=''>I've been working as a FullStack Developer since 2022. Although I'm somewhat more proficient in the frontend side of things...</p>
                <p className='inline'>I'm currently a Software Engineer <p className='inline'>@Mirqah-Media-Lab</p></p>

            </div >
        </div >
    )
}

export default About
