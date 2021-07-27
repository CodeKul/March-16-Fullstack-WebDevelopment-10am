import React, { useReducer } from 'react'


// state, action, dispatch, payload
// to do list usereducer

// https://blog.logrocket.com/guide-to-react-usereducer-hook/

// https://alligator.io/react/usereducer/

function countReducer (state, action) {
    switch (action.type) {
        case "increment" :
            return {...state, count:state.count + state.incBy, incBy: state.incBy};

            case "decrement" :
                return {...state, count:state.count - state.incBy, incBy: state.incBy}
        
                case "reset":
                    return {...state, count: 0, incBy: 0}

                    case "update":
                        return {...state, count:state.count, incBy: action.payload}

    
                        default: 
                        return {count: state.count} 
    
    
        };

   
}

export default function CounterRed() {

    // const [state, action] = useReducer()
    // state will hold the data/state 
    // action will trigger or execute some function/statements

    const initialState =  {

        

    }
    

    const [count, sendAction] = useReducer(countReducer, {
        count: 0,
        incBy: 1});

    
    return (
        <div>
            

            <h1>Counter</h1>

            <span>{count.incBy}</span>

            <input type="range" 
            name="number"
            value={count.incBy}
            min="1"
            max="20"
            onChange={(e) => {
                sendAction({type: "update", payload: Number(e.target.value)})
            }}
            />


            <h3>{count.count}</h3>

            <button onClick={() => sendAction({type: "increment"})}>Increment</button>
            <button onClick={() => sendAction({type: "decrement"})}>Decrement</button>
            <button onClick={() => sendAction({type: "reset"})}>Reset</button>
        </div>
    )
}
