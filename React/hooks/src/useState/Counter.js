import React, {useState} from 'react'

export default function Counter() {

    const[count, setCount] = useState(0);

    const [arr, setArr]= useState([]);

    const [name, setName]= useState("Codekul")

    const [obj, setObj]= useState({})

    const [isActive, setIsActive]= useState(false)

    const handleIncrement = () => {
        setCount(count + 1) 

    }

    const handleDecrement = () => {
        setCount(count-1)
        
    }



    return (
        <div>
            

            <h1>Counter Example with Functional component and useState hook</h1>
        
        <h2>Counter : {count} </h2>


        <br />
        <br />

        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        
        </div>
    )
}
