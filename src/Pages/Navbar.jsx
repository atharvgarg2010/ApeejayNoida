import React from 'react'
import { useState } from 'react'
// import { fas, fad, fass, fasds } from '@awesome.me/kit-KIT_CODE/icons'  
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router';
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <h1>Logo</h1>
                </div>
                <div className={`nav-links ${isOpen ? 'resptabs' : 'tabs'}`}>
                    <div className="tab"><Link to="/">Home</Link></div>
                    <div className="tab"><Link to="/vision">Vision</Link></div>
                    <div className="tab"><Link to="/activites">Activities</Link></div>
                    <div className="tab"><Link to="/alumini">Alumini</Link></div>
                    
                </div>
                <div className="btns">
                    <button className="enroll"><Link to="/form">Enroll Now</Link></button>
                    <button className="ham" onClick={toggleMenu}>
                        <FaBars/>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar