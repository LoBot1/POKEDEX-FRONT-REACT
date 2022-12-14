import logo from './logo.svg';
import './App.css';             

import NavBar from "./components/NavBar";
import Home from "./pages/home";
import PokedexAll from "./pages/PokedexAll";
import PokedexCatch from "./pages/PokedexCatch";
import PokemonType from "./pages/PokemonType";
import PokemonCreate from "./pages/PokemonCreate";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React from 'react';

//App.js
function App(props){
  return <Router>
      <Switch>
        <Route exact path="/Home">
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
        <Route path="/pokemon/:id">
          <PokemonType />
        </Route>
        <Route path="/create">
          <PokemonCreate/> 
        </Route>
        <React.Fragment>
          <NavBar />
        </React.Fragment>
      </Switch>
  </Router>
}

export default App;
