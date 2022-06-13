import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/header/NavBar';
import {Footer} from './components/footer/Footer';
import {Body} from './components/body/CartWidget';
import { ItemListContainer } from './components/ItemListContainer';



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
