import React from 'react'

import logo from "../images/logo.webp"

import {Link, NavLink} from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">

                <div className="container-fluid">
                <a className="navbar-brand" href="#">

                    <img src={logo}/>

                    </a>


                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navcollapse" aria-expanded="false">
                    <span class="navbar-toggler-icon"></span>
                    </button>


                    <div class="collapse navbar-collapse" id="navcollapse" >

                        <ul class="nav navbar-nav mb-2" >

                        <li className="nav-item">
                                <Link className="nav-link" to="/" >
                                        Home
                                </Link>
                                </li>
                         


                            <li className="nav-item">
                                <Link className="nav-link" to="/about" >
                                        Industries
                                </Link>
                            </li>


                            <li class="nav-item">
                                <Link to="/blog" class="nav-link">
                                        Blog
                                </Link>
                            </li>



                            <li class="nav-item">
                                <Link to="/contact" class="nav-link">
                                    How it Works
                                </Link>
                            </li>


                            <li class="nav-item">
                                <Link to="/blog" class="nav-link">
                                        Our Customers
                                </Link>
                            </li>



                            <li class="nav-item">
                                <Link to="/contact" class="nav-link">
                                    About Us
                                </Link>
                            </li>

                            <li class="nav-item">
                                <Link to="/contact" class="nav-link">
                                    Contact Us
                                </Link>
                            </li>


                            <li className="nav-item dropdown" >
                                <Link to="/services" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        Services
                                </Link>


                                <ul className="dropdown-menu">

                                <li>
                                    <Link className="dropdown-item">
                                        Service 1
                                    </Link>
                                    </li>

                                    <li>
                                    <Link className="dropdown-item">
                                        Service 2
                                    </Link>
                                    </li>

                                    <li>
                                    <Link className="dropdown-item">
                                        Service 3
                                    </Link>
                                    </li>

                                    <li>
                                    <Link className="dropdown-item">
                                        Service 4
                                    </Link>
                                    </li>

                            </ul>

                            </li>

                            

                           


                            <li><button className="btn btn-success rounded-pill">Login</button></li>

                        </ul>

                    </div>
                </div>

              

            </nav>

            {/* <Link to="/blog">Blog</Link>

            <NavLink to="/about">About</NavLink> */}
        </div>
    )
}
