import React from 'react'
import Toggle from '../Toggle/Toggle'
import './navbar.css'

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Abdo-Me</div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        <li>
                            <a href="#experience">Experience</a>
                        </li>
                        <li>
                            <a href="#portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a href="#testimonials">Testimonials</a>
                        </li>
                    </ul>
                </div>
                <button className="button">
                    Contact
                </button>
            </div>
        </div>
    )
}

export default Navbar