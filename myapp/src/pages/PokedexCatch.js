import { useEffect, useInsertionEffect, useState } from 'react';
import {AiOutlineEdit,  AiOutlineClose } from 'react-icons/ai';
import { Delete, getCatch } from '../api/api';
import NavBar from '../components/NavBar';
import '../style/card.css'

function PokemonCatch(props){
    const [ pokemons, setPokemons ] = useState([]);

    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant ! 
        const pokemonsFetched = getCatch();
        pokemonsFetched
            .then(result => setPokemons(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);

    return <div className="pokemon-list">
        <div>
            <NavBar />
        </div>
        <div className="flex">
        {
            pokemons.map((pokemon,key) =>{
            return <div key={key} className="bloc-pokemon">
                <a href='type'>
                    <div className='card'>
                        <div className='name'>
                                <button className="nav-btn nav-close-btn" onClick={() => Delete(pokemon.name) } >
                                    <a href="catch">
                                        <AiOutlineClose/>
                                    </a>
                                </button>
                            {pokemon.name}
                            <button className="nav-btn nav-close-btn">
                                <a href="catch">
                                    <AiOutlineEdit/>
                                </a>
                            </button>
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
                    </div>
                </a>
            </div>
            })
        }
        
        </div>
    </div>;
}

export default PokemonCatch;