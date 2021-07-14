import logo from './logo.svg';
import './App.css';
import Counter from './useState/Counter';
import Ex from './useState/Ex';
import Effect from './useEffect/Effect';

function App() {
  return (
    <div className="App">
      <Counter/>

      {/* <Ex/> */}

      <Effect/>
    </div>
  );
}

export default App;
