import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'

import About from './About'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
  

      <Router>
      <Navbar/>
        <Switch>
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
