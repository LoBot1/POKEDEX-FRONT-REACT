import { useEffect, useState } from 'react';
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
                <div>
                    <div>
                        {pokemon.name}
                    </div>
                    <div>
                        <img src={pokemon.img} />
                    </div>
                    <div>
                        {pokemon.type1}
                    </div>
                    <div>
                        {pokemon.type2}
                    </div>
                    <div>
                        {pokemon.num}
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