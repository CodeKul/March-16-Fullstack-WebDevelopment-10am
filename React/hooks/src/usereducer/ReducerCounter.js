import React, {useReducer, useState} from 'react'


function reducer(state, action) {

    switch (action.type) {
        case "increment" : 
        
            return {  count: state.count+1};
            break;
        

        case "decrement": 
            return {count: state.count-1}
            break;
default: return {state}
           
        
    }

}


const count = 0



export default function ReducerCounter() {

    const [state, dispatch] = useReducer(reducer, count)

    console.log(state,dispatch)

    console.log(state)


    //const [count, setCount] = useState(0)



    

    return (
        <div>
            <h1>Counter with useReducer hooks</h1>

            <h2>Counter : {state.count}</h2>


            <button onClick={() => {dispatch({type: "increment"})}}>Increment</button>
            <button onClick={() => {dispatch({type: "decrement"})}}>Decrement</button>
        </div>
    )

}
