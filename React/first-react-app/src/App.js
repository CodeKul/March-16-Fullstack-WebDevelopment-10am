import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import Form from "./components/Form"
import SecondComponent from './components/SecondComponent';
import StateExample from './components/StateExample';
import PropsExample from './components/PropsExample';
import ConditionalRendering from "./components/ConditionalRendering"
import Login from './components/Login';
import Logout from './components/Logout';


function App(isLoggedIn) {
  return (
    <div className="App">

{/* <FirstComponent/>

<SecondComponent/> */}

{/* <StateExample/>

<PropsExample name="Sayali"/>

<PropsExample name="Oindrilla"/>

<PropsExample name="Sagar"/>

<PropsExample name="Abhijeet"/>
<PropsExample name="Sanket"/> */}

{/* <Login/>

<Logout/> */}

<ConditionalRendering isLoggedIn = {false}/>
{/* <Form/> */}

     
    </div>
  );
}

export default App;
