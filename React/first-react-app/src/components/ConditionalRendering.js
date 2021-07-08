import React, { Component } from 'react'
import Login from "./Login"
import Logout from './Logout'
import Message from './Message'

export default class ConditionalRendering extends Component {


    // If statement 
    // else statement 
    // terneray operator statement 
    // && operator statement

    // switch satement 
    // element variable

    constructor(props){

        super()
this.state ={
    isLoggedIn: false
}
    }

  


    loginclick = () => {
        this.setState({ isLoggedIn: !this.state.isLoggedIn });
      };
        
            logoutclick =() => {
                this.setState({ isLoggedIn: !this.state.isLoggedIn });
            }

    render() {

        //let element;

        // if (this.state.isLoggedIn) {
        //     element = <Logout logoutmsg ={this.logoutclick}/>
        // } else {           

        //     element = <Login loginmsg ={this.loginclick}/>
        // }    


        switch(this.state.isLoggedIn) {
            case true : return  <Logout logoutmsg ={this.logoutclick}/>
            break;
            case false : return <Login loginmsg ={this.loginclick}/>
            break;
            default: return null;         

        }
        return (
            <div>

<Message isLoggedIn = {this.state.isLoggedIn}/>
{/* {element} */}
              
            </div>
        )
    }
}
