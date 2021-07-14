import React, { Component } from 'react'

export default class NewComponent extends Component {

    constructor () {
        super();

        this.state = {
            count: 0
        }
    }




    render() {
        return (
            <div>
                <h1>Component life cycle methods</h1>

                <h4>Count : {this.state.count}</h4>

            </div>
        )
    }
}
