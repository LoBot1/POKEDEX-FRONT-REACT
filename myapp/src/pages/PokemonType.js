import { useEffect, useInsertionEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link, useParams } from "react-router-dom";
import { AiFillPlusCircle, FaFrownOpen, FaPlus, FaPlusCircle, } from 'react-icons/fa';
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
        <div className='titre'>
            <h1>Pokemon </h1>
        </div>
        {
            pokemon?<div className="flex">
            <div className="bloc-edit">
                    <div className='card'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="hidden" {...register("_id")} defaultValue={pokemon._id} />
                            <input {...register("name")} defaultValue={pokemon.name} />
                            <input {...register("type1")} defaultValue={pokemon.type1} />
                            <input {...register("type2")} defaultValue={pokemon.type2} />
                            <input {...register("num")} defaultValue={pokemon.num} />
                            <input {...register("desc")} defaultValue={pokemon.desc} />
                            <img src = {pokemon.img}></img>
                            <input {...register("img")} defaultValue={pokemon.img} />
                            <button type="submit">Valider</button>
                        </form>
                    </div>
            </div>
        </div>:null
        }
        
    </div>;
}
 
export default PokedexType;