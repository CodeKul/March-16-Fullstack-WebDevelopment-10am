import React from "react";
import { Link } from "react-router-dom";

import "../components/Blog.css"

export default function Blog() {


    const Blog = [
        {
            title: "Blog 1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolorem ducimus velit sequi itaque blanditiis vero, non, nulla obcaecati, ipsam minima cumque nobis temporibus libero molestiae? Voluptate doloribus sint aut!"
        },
    
        {
            title: "Blog 2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolorem ducimus velit sequi itaque blanditiis vero, non, nulla obcaecati, ipsam minima cumque nobis temporibus libero molestiae? Voluptate doloribus sint aut!"
        }, 
    
        {
            title: "Blog 3",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolorem ducimus velit sequi itaque blanditiis vero, non, nulla obcaecati, ipsam minima cumque nobis temporibus libero molestiae? Voluptate doloribus sint aut!"
        }, 
        {
            title: "Blog 4",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolorem ducimus velit sequi itaque blanditiis vero, non, nulla obcaecati, ipsam minima cumque nobis temporibus libero molestiae? Voluptate doloribus sint aut!"
        },
    
        {
            title: "Blog 5",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolorem ducimus velit sequi itaque blanditiis vero, non, nulla obcaecati, ipsam minima cumque nobis temporibus libero molestiae? Voluptate doloribus sint aut!"
        }
    ]

  return (


    Blog.map((key, value) => {

        return(
            <>
            <h1>Blog</h1>   
            
            <div  className="blog-container">
              <div className="card">
                <h3 className="card-title">{key.title}</h3>
                <p className="card-text">
                 {key.description}
                </p>
            
                <Link className="btn btn-primary" to=""> Read Blog</Link>
              </div>
            </div>
            </>
            
        )

       
        
    })
    
     
  );
}
