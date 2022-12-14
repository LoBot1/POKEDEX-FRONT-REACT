import { useEffect, useInsertionEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link, useParams } from "react-router-dom";
import { AiFillPlusCircle, FaFrownOpen, FaPlus, FaPlusCircle, } from 'react-icons/fa';
import { ImExit} from 'react-icons/im';

import {MdCatchingPokemon, MdDelete} from 'react-icons/md';
import {GrValidate} from 'react-icons/gr';
import { Catch, Delete, getAll, getCatch, getOne, Update} from '../api/api';
import { useForm } from "react-hook-form";
import NavBar from '../components/NavBar';
import '../style/pokemon.css'
 
 
 
function PokedexType(props){
    let { id } = useParams();
    const [ pokemon, setPokemon ] = useState(null);
    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant !
        const pokemonsFetched = getOne(id);
        pokemonsFetched
            .then(result => {
                setPokemon(result.pokemon)
            })
            .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
    console.log(data);
    /*Coder ici pour préparer l'appel réseau POST avec FETCH !*/
     //On peut transformer les données en JSON pour les envoyer dans notre appel
     //JSON.stringify(data);
    Update(data)
    
    }

    return <div className="pokemons-list">
        <div>
            <NavBar />
        </div>
        {
            pokemon?<div className="fleex">
            <div className="bloc-edit">
                    <div className='card'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='ntt'>
                                <input type="hidden" {...register("_id")} defaultValue={pokemon._id} />
                                <input className='name' {...register("name")} defaultValue={pokemon.name} />
                                <input className='type1'{...register("type1")} defaultValue={pokemon.type1} />
                                <input className='type2'{...register("type2")} defaultValue={pokemon.type2} />
                            </div>
                            <input type="hidden" className='num'{...register("num")} defaultValue={pokemon.num} />
                            
                            <div className='img'>
                                <img src = {pokemon.img}></img>
                            </div>
                            <textarea className='desc'{...register("desc")} defaultValue={pokemon.desc} />
                            <input {...register("img")} defaultValue={pokemon.img} />
                            <button type="submit">Valider</button>


                            <div className='button'>
                                <div className='croix'>
                                    <img src="https://i1.wp.com/lesincoherents.brunovanderaert.com/wp-content/uploads/2019/08/croix-noir.png?fit=741%2C720&ssl=1"></img>
                                </div>
                                <div className='rond'>
                                    <div className='rond1'><img src="https://www.icône.com/images/icones/2/4/button-green.png"></img></div>
                                    <div className='rond1'><img src="https://www.icône.com/images/icones/2/4/button-red.png"></img></div>
                                </div>
                            </div>
                            <div className='return'>
                                <Link to="/catch">
                                    <div>Retour a Pokedex </div>
                                </Link>
                                <div className='exit'><ImExit/></div>
                            </div>
                        </form>

                    </div>
            </div>
        </div>:null
        }
        
    </div>;
}
 
export default PokedexType;