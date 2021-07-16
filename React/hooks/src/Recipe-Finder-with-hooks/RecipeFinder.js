import React, { useEffect, useRef, useState } from 'react'

export default function RecipeFinder() {

    let url ="https://api.edamam.com/search?q=eggs&app_id=3a6bab34&app_key=cf6ebfdcf5cbd02bde7f24df44ae3c41";
    const API_KEY = "cf6ebfdcf5cbd02bde7f24df44ae3c41";
    const APP_ID ="3a6bab34";

    const[recipeList, updatedRecipeList] = useState([])

    const inputRef = useRef(null)

    useEffect(()=> {
            })


    const search = () => {

        console.log(inputRef.current.value)

        fetch(url)
        .then(response => {
            console.log(response.json())
            return response.json()
        })
        .then(res=> {
            console.loh("final response", res.hits)
            updatedRecipeList(res.hits)
            console.log(recipeList)
            return res.hits
        })
        .catch(err=> {
            console.log("error", err)           
        })


    }
    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={search}>Search Recipe</button>


            <div className="container">
                <p>{}</p>
            </div>
        </div>
    )
}
