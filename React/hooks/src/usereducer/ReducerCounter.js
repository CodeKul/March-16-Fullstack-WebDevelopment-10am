import React, {useReducer, useState} from 'react'


function reducer(state, action) {

    switch (action.type) {
        case "increment" : 
        
            return {...state,  state: initialState.count+1};
            break;
        

        case "decrement": 
            return {...state,  state: initialState.count-1}
            break;
default: return {state: initialState}
           
        
    }

}


const initialState = {
    count: 0,

}



export default function ReducerCounter(initialState) {

    const [state, dispatch] = useReducer(reducer, initialState)

    console.log(state,dispatch)

    console.log(initialState.count)


    //const [count, setCount] = useState(0)



    

    return (
        <div>
            <h1>Counter with useReducer hooks</h1>

            <h2>Counter : {initialState.count}</h2>


            <button onClick={() => {dispatch({type: "increment"})}}>Increment</button>
            <button onClick={() => {dispatch({type: "decrement"})}}>Decrement</button>
        </div>
    )

}
