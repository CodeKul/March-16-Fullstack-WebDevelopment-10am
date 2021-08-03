import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Navbar.css"

export default function Navbar() {
    return (
        <div>
            <nav>
                <ul>
                   {/* <li><Link to="/">Home</Link> </li>  */}

                   <li><NavLink to="/">Home</NavLink></li>
                    {/* <li> <Link to="/about">About</Link> </li> */}

                    <li> <NavLink to="/about">About</NavLink> </li>
                    {/* <li><Link to="/blog">Blog</Link> </li> */}
                    <li><NavLink to="/blog">Blog</NavLink> </li>
                    {/* <li> <Link to="/contact">Contact</Link> </li> */}

                    <li> <NavLink to="/contact">Contact</NavLink> </li>

                    <li><NavLink to="/game">Play a Game</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}
