import logo from './logo.svg';
import './App.css';
import Counter from './useState/Counter';
import Ex from './useState/Ex';
import Effect from './useEffect/Effect';
import InputFocus from './useRef/InputFocus';
import TopRef from './useRef/TopRef';
import RecipeFinder from './Recipe-Finder-with-hooks/RecipeFinder';
import ContextEx from './useContext/ContextEx';
import Component2 from './useContext/Component2';
import Toggle from './useContext/Toggle';
import BookContext from './useContext/BookContextEx/BookContext';
import AddNewBook from './useContext/BookContextEx/AddNewBook';
import BookList from './useContext/BookContextEx/BookList';
import Navbar from './useContext/BookContextEx/Navbar';
import Book from './useContext/BookContextEx/Book';

function App(props) {
  return (
    <div className="App">
      {/* <Counter/> */}

      {/* <Ex/> */}

      {/* <Effect/> */}

      {/* <InputFocus/>

      <TopRef/> */}

      {/* <RecipeFinder/> */}

     {/* <Component2/> */}

     {/* <Toggle/> */}


     <BookContext>
       {/* <AddNewBook/> */}
       <BookList/>
       <Book/>
       <Navbar/>
     </BookContext>


     

    </div>
  );
}

export default App;
