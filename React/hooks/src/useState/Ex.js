import React from "react"


export default class Ex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount() 
    { 
        document.title = `You clicked ${this.state.count} times`;
    console.log("Component did Mount") }

    componentDidUpdate() {
         document.title = `You clicked ${this.state.count} times`; 
         console.log("Component did Update" )}
    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click me
                </button>
            </div>
        );
    }
}