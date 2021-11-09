import './App.css';
import { BrowserRouter,Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx';
import './css/NavBar.css';
import './css/ItemCount.css';
import './css/Item.css';
import './css/ItemDetail.css';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
  return (
    <div className="App">

      {/*  Componentes donde quiero navegar */}
      <BrowserRouter>

        <NavBar />        
        {/* Navegar entre los componentes */}
        <Switch>
          {/* Route: Crea conección entre componente y la ruta */}
          <Route exact path='/' component={ItemListContainer} />
          <Route exact path='/category/:id' component={ItemListContainer} />
          <Route exact path='/item/:id' component={ItemDetailContainer} />
          <Route exact path='/cart' component={Cart} />
        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;
