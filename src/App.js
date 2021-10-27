// import logo from './logo.svg';
import './App.css';
import { ItemListContainer } from './components/IItemListContainer';
import ItemCount from './components/ItemCount';

import NavBar from './components/NavBar';

function App() {
  
  const comprar = () => {
    alert ("Gracias por tu compra")
}

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
      <ItemListContainer greetings="Gracias por usar este carrito... AMEO"/>
      <ItemCount initial={1} stock={10} onAdd={comprar}/>
    </div>
  );
}

export default App;
