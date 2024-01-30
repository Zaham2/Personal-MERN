import React from 'react'
import NavItem from './NavItem'
import { useNavigate } from 'react-router-dom'
import Logo from './Logo'

const NabvBar = () => {
    const navigate = useNavigate()
    return (
        <nav className=''>
            <div className="bg-purple-400 h-8">
                <ul className='flex flex-row justify-end'>
                    <span className="mr-auto">
                        <Logo className="" imgSrc="https://i.ibb.co/Wk62Gvb/logo.webp" altText="someimg" />
                    </span>
                    <span className="flex flex-row align-bottom w-4/12 h-8 justify-center">
                        <li className="basis-1/4 px-2"><NavItem text="Home" onClick={() => navigate("/")} /></li>
                        <li className="basis-1/4 px-2"><NavItem text="About" onClick={() => navigate("/about")} /></li>
                        <li className="basis-1/4 px-2"><NavItem text="Projects" onClick={() => navigate("/projects")} /></li>
                    </span>
                </ul>
            </div>
        </nav >
    )
}

export default NabvBar
