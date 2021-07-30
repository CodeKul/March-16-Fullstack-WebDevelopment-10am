import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,
Route, Switch, useRouteMatch} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogContent from './components/BlogContent';


// https://blog.logrocket.com/the-best-styling-in-react-tutorial-youve-ever-seen-676f1284b945/

function App() {

  let topics = [
    {
      topicName: "CSS Grid",
      id: 1,
      description: "lorem ipsum",
      content: [
        {
          title: "Row and Columns in Grid",
          id: "css",
          description: "lorem ipsum en",
        },
      ],
    },
    {
      topicName: "Javascript Event Propagation",
      id: 2,
      description: "lorem ipsum",
      content: [
        {
          title: "Capturing and Bubbling",
          id: "js",
          description: "lorem ipsum en",
        },
      ],
    },
  ];
  return (
    <div className="App">

      <Router>

    <Header/>
      <Navbar/>


      <Switch>
      <Route path="/" exact>
        <Home/>
      </Route>

      <Route path="/about">
        <About/>
      </Route>
{/* 
      <Route path=/> */}


      <Route path="/blog">
        <Blog topics={topics}/>
      </Route>

      <Route component={BlogContent} path="/blog:topicId"/>

      <Route path="/contact" component={Contact}/>



      </Switch>


      <Footer/>


      </Router>
     
    </div>
  );
}

export default App;
