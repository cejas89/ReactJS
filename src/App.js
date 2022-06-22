import './App.css';
import {NavBar} from './components/header/NavBar';
import {Footer} from './components/footer/Footer';
import { ConexionApi } from './components/body/PruebaFetch';
import { ItemListContainer } from './components/ItemListContainer';



function App() {
  return (
    <div>
      
    <NavBar/>

    <ItemListContainer/>

    <Footer/>

    <ConexionApi/>
        
    </div>
  );
}

export default App;
