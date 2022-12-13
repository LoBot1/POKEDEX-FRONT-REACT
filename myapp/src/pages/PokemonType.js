import { useEffect, useInsertionEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link, useParams } from "react-router-dom";
import { AiFillPlusCircle, FaFrownOpen, FaPlus, FaPlusCircle, } from 'react-icons/fa';
import {MdCatchingPokemon, MdDelete} from 'react-icons/md';
import {GrValidate} from 'react-icons/gr';
import { Catch, Delete, getAll, getCatch, getOne, Update} from '../api/api';
import NavBar from '../components/NavBar';
import '../style/pokemon.css'



function PokedexType(props){
    let { id } = useParams();
    const [ pokemon, setPokemon ] = useState([]);
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
        const { register, handleSubmit } = Update();
        const onSubmit = (data) => {
          console.log(data);
          /*Coder ici pour préparer l'appel réseau POST avec FETCH !*/
          //On peut transformer les données en JSON pour les envoyer dans notre appel
          //JSON.stringify(data);
        }
   
    return <div className="pokemons-list">
        <div>
            <NavBar />
        </div>
        <div className='titre'>
            <h1>Pokemon </h1>
        </div>
        <div className="flex">
            <div className="bloc-edit">
                        <div className='card'>
                            <div className='name'>
                                <button className="nav-btn nav-close-btn" onClick={() => Delete(pokemon.name) } >
                                    <Link className='novalid' to="/catch"><MdDelete/></Link>
                                </button>
                                <input  type="text" id="name" name="name" defaultValue={pokemon.name} onClick={() => Update()}></input>
                            </div>
                            <div className='image'>
                                    <input  type="text" id="name" name="name" defaultValue={pokemon.img} onClick={() => Update()} ></input>
                                <img src={pokemon.img} />
                            </div>
                            <div className='type'>
                                <div className='type1'>
                                    <input  type="text" id="name" name="name" defaultValue={pokemon.type1} onClick={() => Update()}></input>
                                </div>
                                <div className='type2'>
                                    <input  type="text" id="name" name="name" defaultValue={pokemon.type2} ></input>.
                                    <button onClick={() => Update(pokemon._id,pokemon.name,pokemon.type1,pokemon.type2,pokemon.num,pokemon.desc.pokemon.img)}>valider</button>

                                </div>
                            </div>
                            <div className='num'>
                                <input  type="text" id="name" name="name" defaultValue={pokemon.num} onClick={() => Update()}></input>
                            </div>
                            <div className='desc'>
                                <input  type="text" id="name" name="name" defaultValue={pokemon.desc} onClick={() => Update()}></input>
                            </div>
                            <div className='button' >
                                {/* {
                                    pokemonscatch.find(mbappe=>mbappe._id===pokemon._id)?<button className="nav-btn nav-close-btn" >
                                    <Link className='valid' to="/all"><GrValidate/></Link>
                                </button>:<button className="nav-btn nav-close-btn" onClick={() => Catch(pokemon._id)} >
                                <Link className='novalid' to="/all"><MdCatchingPokemon/></Link>

                                </button>
                                } */}
                                
                            </div>
                            
                        </div>
                </div>
        </div>
    </div>;
}

export default PokedexType;