import { useRef } from "react";
import {FaBars, FaTimes } from "react-icons/fa";
import { MdCatchingPokemon } from "react-icons/md";
import { Link } from "react-router-dom";
import '../style/main.css'
// npm install react-icons
function  NavBar(){
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    
    return( 
        <header>
            <div className="logo">
                <img className="imglogo" src="https://www.webstickersmuraux.com/fr/img/pokgo03-png/folder/products-detalle-png/autocollants-poke-ball---pokemon.png"></img>
            </div>
            <nav ref={navRef}>
                <Link to="/home">home</Link>
                <Link to="/all">Pokemon</Link>
                <Link to="/catch">Pokedex</Link>
                <Link to="/create"><MdCatchingPokemon/></Link>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>


     );
}


export default NavBar ; 