import logo from './logo.svg';
import './App.css';             

import Home from "./pages/Home";
import PokedexAll from "./pages/PokedexAll";
import PokedexCatch from "./pages/PokedexCatch";
import PokemonType from "./pages/PokemonType";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//App.js
function App(props){
  return <Router>
      <Switch>
        <Route exact path="/home">
          <Home/> 
        </Route>
        <Route path="/all">
          <PokedexAll/> 
        </Route>
        <Route path="/catch">
          <PokedexCatch/> 
        </Route>
        <Route path="/type">
          <PokemonType/> 
        </Route>
      </Switch>
  </Router>
}

export default App;
