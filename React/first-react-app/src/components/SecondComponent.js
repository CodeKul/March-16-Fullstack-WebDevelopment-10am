import React, { Component } from 'react'

export default class SecondComponent extends Component {

    constructor(props){
        console.log("Inside Constructor...")

        super(props);

        this.state = {
            Counter: 0
        };

        this.increment = () => this.setState({Counter: this.state.Counter +1 })
        this.decrement = () => this.setState({Counter: this.state.Counter -1 })

    }

    componentDidMount(){
        console.log("Component Did mount/Placed")
        console.log("==================================================")
    }

    shouldComponentUpdate(nextProps, nextState, snapshot){
        return true
        console.log("Component should Update")
        console.log("==================================================")
        
    }

    componentDidUpdate(nextProps, nextState, snapshot){
        console.log("Component Did updated")
        console.log("==================================================")
    }

    render() {
        console.log("Inside render - renderer-Placing/Mounting the component")
        return (
            <div>
                <h3>Component Lifecycle methods</h3>

                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>

                <h2 className="counter">Counter: {this.state.Counter}</h2>
            </div>
            
        )
    }
}
