import React, { useEffect, useState } from 'react'

export default function Effect() {

    const [count, setCount] = useState(0);

    const[data, setData] =useState("")

    useEffect(() => {
        //document.title = `You clicked ${count} times`;
        console.log("Component rendered")

        fetch("https://jsonplaceholder.typicode.com/photos")
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
            //setData(result)
        });
    }, []);

    return (
        <div>
             <p>You clicked {count} times</p>
                <button onClick={() => setCount( count + 1)}>
                    Click me
                </button>



                <div>{data}</div>
        </div>
    )

    }