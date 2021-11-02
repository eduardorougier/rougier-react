// import logo from './logo.svg';
import './App.css';
import { ItemListContainer } from './components/IItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

import NavBar from './components/NavBar';

function App() {
  
 

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      
      <main>
      <ItemListContainer greetings="Gracias por usar este carrito..."/>
      <ItemDetailContainer />
      </main>
      
      
      
    </div>
  );
}

export default App;
