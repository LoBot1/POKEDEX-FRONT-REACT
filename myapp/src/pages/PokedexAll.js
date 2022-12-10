import { useEffect, useState } from 'react';
import { AiFillPlusCircle, FaFrownOpen } from 'react-icons/fa';
import { getAll } from '../api/api';
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

    return <div className="pokemon-list">
        <div>
            <NavBar />
        </div>
        <div className="flex">
        {
            pokemons.map((pokemon,key) =>{
            return <div key={key} className="bloc-pokemon">
                <div className='card'>
                    <div className='name'>
                        {pokemon.name}
                    </div>
                    <div className='image'>
                        <img src={pokemon.img} />
                    </div>
                    <div className='type1'>
                        {pokemon.type1}
                    </div>
                    <div className='type2'>
                        {pokemon.type2}
                    </div>
                    <div className='num'>
                        {pokemon.num}
                    </div>
                    <div className='button'>
                        <button className="nav-btn nav-close-btn" >
                            <FaFrownOpen/>
                        </button>
                    </div>
                    {/* {pokemon.desc} */}
                </div>
            </div>
            })
        }
        
        </div>
    </div>;
}

export default PokedexAll;