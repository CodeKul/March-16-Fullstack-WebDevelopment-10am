import React from 'react'
import work from "../images/work.svg"
import Navbar from './Navbar'

import "./HomePage.css"

import report from "../images/report.png"


// whenever we work with images in React ins src we need include img name which has been imported 
// 1. import image from respective address 
// 2. use that image as an object in src attribute

export default function HomePage() {
    return (
        <div>
          


            {/* <Navbar/> */}


            <main>
              <section className="intro-section">
                  <div>lorem ipsum dolor sit amet, consectetur
                      lorem ipsum dolor sit amet, consectetur

            <div>
                <button className="btn btn-success rounded-pill ml-3">Learn More</button>
            </div>
                     
                  </div>

                  <img src={work}/>
              </section>



              <section className="features">

                  <h1>Features</h1>

                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus.
                  </p>

              </section>


              <section className="reports">

                  <div>

                      <img src={report}/>
                      <h5>Report One</h5>
                      <p>
                      Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat.
                      </p>

                  </div>


                  <div>

<img src={report}/>
<h5>Report One</h5>
<p>
Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat.
</p>

</div>


<div>

<img src={report}/>
<h5>Report One</h5>
<p>
Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat.
</p>

</div>

              </section>
            </main>
        </div>
    )
}
