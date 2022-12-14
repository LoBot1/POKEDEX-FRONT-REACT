import { useEffect, useInsertionEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link, useParams } from "react-router-dom";
import { AiFillPlusCircle, FaFrownOpen, FaPlus, FaPlusCircle, } from 'react-icons/fa';
import {MdCatchingPokemon, MdDelete} from 'react-icons/md';
import {GrValidate} from 'react-icons/gr';
import { Catch, Create, Delete, getAll, getCatch, getOne, Update} from '../api/api';
import { useForm } from "react-hook-form";
import NavBar from '../components/NavBar';
import { ImExit} from 'react-icons/im';

 
 
function PokedexCreate(props){
    const [ pokemon, setPokemons ] = useState({});
    //va s'executer seulement au lancement du composant (dep: [])
    // récupérer la liste des users seulement au chargement du composant !
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
    console.log(data);
    /*Coder ici pour préparer l'appel réseau POST avec FETCH !*/
     //On peut transformer les données en JSON pour les envoyer dans notre appel
     //JSON.stringify(data);
    Create(data)
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
                            <input {...register("name")} placeholder="Name" defaultValue={pokemon.name} />
                            <input {...register("type1")} placeholder="First Type" defaultValue={pokemon.type1} />
                            <input {...register("type2")} placeholder="Second Type" defaultValue={pokemon.type2} />
                            <input {...register("num")} placeholder="Pokemon number" defaultValue={pokemon.num} />
                            <div className='img'>
                                <img src = {pokemon.img}></img>
                            </div>
                            <input {...register("desc")} placeholder="Description" defaultValue={pokemon.desc} />
                            <input {...register("img")} placeholder="Picture's URL" defaultValue={pokemon.img} />
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
                                <Link to="/all">
                                    <div>Crée le Pokemon </div>
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
 
export default PokedexCreate;