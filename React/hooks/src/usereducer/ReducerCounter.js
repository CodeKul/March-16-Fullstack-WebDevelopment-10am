import React, {useReducer, useState} from 'react'


function reducer(state, action) {

    switch (action.type) {
        case "increment" : 
            return {count : state.count+1};
            break;
        

        case "decrement": 
            return {count : state.count - 1};
            break;

            default: throw new Error()
        
    }

}



function init () {
    
}


export default function ReducerCounter(initialState) {

    const [state, dispatch] = useReducer(reducer, initialState, init)


    const [count, setCount] = useState(0)



    

    return (
        <div>
            <h1>Counter with useReducer hooks</h1>

            <h2>Counter : {count}</h2>


            <button onClick={() => {dispatch({type: "increment"})}}>Increment</button>
            <button onClick={() => {dispatch({type: "decrement"})}}>Decrement</button>
        </div>
    )

}
