import React, { Component } from 'react'

export default class StateExample extends Component {

    constructor(props){
        console.log("Inside Constructor...")

        super(props);

        this.state = {
         message: "Welcome to CODEKUL..."
        }
    }


    changeMessage() {
        this.setState({
            message: "Thank You For Subscribing...."
        }) 
    }


   

    render() {

        

        return (
            <div>
                <h1>{this.state.message}</h1>

                <button onClick={() => this.changeMessage()} className="btn btn-primary">Subscribe</button>
            </div>
        )
    }
}
