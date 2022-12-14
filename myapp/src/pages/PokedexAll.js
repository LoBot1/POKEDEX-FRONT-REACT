import { useEffect, useInsertionEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { AiFillPlusCircle, FaFrownOpen, FaPlus, FaPlusCircle, } from 'react-icons/fa';
import {MdCatchingPokemon, MdDelete} from 'react-icons/md';
import {GrValidate} from 'react-icons/gr';
import { Catch, Delete, getAll, getCatch, getOne } from '../api/api';
import NavBar from '../components/NavBar';
import '../style/card.css'

function PokedexAll(props){
    const [ pokemons, setPokemons ] = useState([]);

    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant ! 
        const pokemonsFetched = getAll();
        pokemonsFetched
            .then(result => setPokemons(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);
    const [ pokemonscatch, setPokemonscatch ] = useState([]);

    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant ! 
        const pokemonsCatched = getCatch();
        pokemonsCatched
            .then(result => setPokemonscatch(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);

    const [ pokemonsselect, setPokemonselect ] = useState([]);

    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant ! 
        const pokemonseled = getOne();
        pokemonseled
            .then(result => setPokemonselect(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);

    return <div className="pokemon-list">
        <div>
            <NavBar />
        </div>
        <div className='titre'>
            <h1>Pokemon </h1>
        </div>
        <div className="flex">
        {
            pokemons.map((pokemon,key) =>{
                    return <div key={key} className="bloc-pokemon">
                        <div className='card'>
                            <div className='name'>
                            <button className="nav-btn nav-close-btn" onClick={() => Delete(pokemon.name) } >
                            <Link className='novalid' to="/all"><MdDelete/></Link>

                                    </button>
                                {pokemon.name}
                            </div>
                            <div className='image'>
                                <img src={pokemon.img} />
                            </div>
                            <div className='type'>
                                <div className='type1'>
                                    {pokemon.type1}
                                </div>
                                <div className='type2'>
                                    {pokemon.type2}
                                </div>
                            </div>
                            <div className='num'>
                                {pokemon.num}
                            </div>
                            <div className='button' >
                                {
                                    pokemonscatch.find(mbappe=>mbappe._id===pokemon._id)?<button className="nav-btn nav-close-btn" >
                                    <Link className='valid' to="/catch"><GrValidate/></Link>
                                </button>:<button className="nav-btn nav-close-btn" onClick={() => Catch(pokemon._id)} >
                                <Link className='novalid' to="/catch"><MdCatchingPokemon/></Link>

                                </button>
                                }
                                
                            </div>
                        </div>
                </div>

            })
        }
        
        </div>
    </div>;
}

export default PokedexAll;