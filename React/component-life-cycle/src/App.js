import logo from './logo.svg';
import './App.css';
import NewComponent from './components/NewComponent';


// prop drilling
// lifting state up 
// context api
// https://blog.logrocket.com/lifecycle-methods-with-the-useeffect-hook/
//https://blog.logrocket.com/react-lifecycle-methods-tutorial-examples/
//https://blog.logrocket.com/a-deep-dive-into-react-context-api/
function App() {
  return (
    <div className="App">
     <NewComponent/>
    </div>
  );
}

export default App;
