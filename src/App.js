import './App.css';
import {NavBar} from './components/header/NavBar';
import {Footer} from './components/footer/Footer';
import { ItemListContainer } from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div>
      
    <NavBar/>

    <ItemListContainer/>

    <Footer/>

        
    </div>
  );
}

export default App;
