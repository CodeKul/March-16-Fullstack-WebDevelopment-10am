import React from 'react'

import logo from "../images/logo.webp"

export default function Navbar() {
    return (
        <div>
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <div className="container-fluid">
                <a className="navbar-brand" href="#">

                    <img src={logo}/>

                    </a>


                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navcollapse" aria-expanded="false">
                    <span class="navbar-toggler-icon"></span>
                    </button>


                    <div class="collapse navbar-collapse" id="navcollapse" >

                        <ul class="nav navbar-nav mb-2" >

                            <li class="nav-item">
                                <a class="nav-link">
                                        Home
                                </a>
                            </li>


                            <li class="nav-item">
                                <a class="nav-link">
                                        About
                                </a>
                            </li>


                            <li class="nav-item dropdown" >
                                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        Services
                                </a>


                                <ul class="dropdown-menu">

                                <li>
                                    <a class="dropdown-item">
                                        Service 1
                                    </a>
                                    </li>

                                    <li>
                                    <a class="dropdown-item">
                                        Service 2
                                    </a>
                                    </li>

                                    <li>
                                    <a class="dropdown-item">
                                        Service 3
                                    </a>
                                    </li>

                                    <li>
                                    <a class="dropdown-item">
                                        Service 4
                                    </a>
                                    </li>

                            </ul>

                            </li>

                            

                            <li class="nav-item">
                                <a class="nav-link">
                                        Blog
                                </a>
                            </li>



                            <li class="nav-item">
                                <a class="nav-link">
                                    Contact
                                </a>
                            </li>

                        </ul>

                    </div>
                </div>

              

            </nav>
        </div>
    )
}
