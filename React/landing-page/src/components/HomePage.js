import React from 'react'
import img2 from "../images/img2.jpg"
import Navbar from './Navbar'

import "./HomePage.css"


// whenever we work with images in React ins src we need include img name which has been imported 
// 1. import image from respective address 
// 2. use that image as an object in src attribute

export default function HomePage() {
    return (
        <div>
            <header>
               Landing Page
            </header>


            {/* <Navbar/> */}


            <main>
              <section className="intro-section">
                  <p>lorem ipsum dolor sit amet, consectetur</p>
              </section>
            </main>
        </div>
    )
}
