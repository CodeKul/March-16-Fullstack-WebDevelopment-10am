import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./styles.css";


// https://blog.logrocket.com/the-best-styling-in-react-tutorial-youve-ever-seen-676f1284b945/

export default function App() {
  return (
    <div className="App">
     <Navbar/>

    <Home/>

    <Contact/>
    </div>
  );
}
