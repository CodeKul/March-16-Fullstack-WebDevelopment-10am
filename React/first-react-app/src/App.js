import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import Form from "./components/Form"
import SecondComponent from './components/SecondComponent';
import StateExample from './components/StateExample';
import PropsExample from './components/PropsExample';

function App() {
  return (
    <div className="App">

{/* <FirstComponent/>

<SecondComponent/> */}

<StateExample/>

<PropsExample name="Sayali"/>

<PropsExample name="Oindrilla"/>

<PropsExample name="Sagar"/>

<PropsExample name="Abhijeet"/>
<PropsExample name="Sanket"/>
{/* <Form/> */}

     
    </div>
  );
}

export default App;
