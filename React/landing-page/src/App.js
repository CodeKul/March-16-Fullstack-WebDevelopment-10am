import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';

import {BrowserRouter as Router,
Route, Switch} from "react-router-dom"


import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Services from "./components/Services";


// https://www.taniarascia.com/redux-react-guide/

// https://dribbble.com/shots/9734357-Greendot-Landing-page


// create a landing page with bootstrap - which will have a video playing in the background.

function App() {
  return (
    <div className="App">
     {/* <HomePage/> */}

    

     <Router>

     <Navbar/>

     <Switch>

       <Route path="/" exact component={HomePage}/>

       <Route path="/blog" exact component={Blog}/>

       <Route path="/contact" exact component={Contact}/>

       <Route path="/services" exact component={Services}/>

</Switch>


     </Router>

    
     

    </div>
  );
}

export default App;
