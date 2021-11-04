import './App.css';
import { ItemListContainer } from './components/IItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

import NavBar from './components/NavBar';

function App() {
  
 

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        
      </header>
      
      <main>
      <Router>
        
        <Switch>
          <Route exact path="/">
            <ItemListContainer greetings="Gracias por usar este carrito..."/>
          </Route>
          
          <Route path="/detalle" component={ItemDetailContainer} />
          <Route exact path='/cart' component={Cart} />
        </Switch>
      </Router>

      </main>    
      
    </div>
  );
}

export default App;