import { useEffect, useInsertionEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { AiFillPlusCircle, FaFrownOpen, FaPlus, FaPlusCircle, } from 'react-icons/fa';
import {MdCatchingPokemon, MdDelete} from 'react-icons/md';
import {GrValidate} from 'react-icons/gr';
import { Catch, Delete, getAll, getCatch, getOne } from '../api/api';
import NavBar from '../components/NavBar';
import '../style/home.css'

function PokedexHome() {
    return (
        <div>
            <div className='nav'>
                <NavBar/>
            </div>
            <div className='page'>
                <div className='imgtitle'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png'></img>
                </div>
                <div>
                    <div className='button1'>
                        <button className="nav-btn nav-close-btn" >
                            <Link to="/catch">Pokemon Capturé</Link>
                        </button>
                    </div>
                    <div className='button2'>
                        <button className="nav-btn nav-close-btn"  >
                            <Link to="/all">Tous les Pokemon</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
    
}
export default PokedexHome;