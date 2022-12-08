import NavBar from '../components/NavBar';
function PokemonType(props){
    return (
        <div>
        <NavBar />
        <div className='pagepoke'>
            <div className='name'>
                <h1>le nom du pkemon sur lequel on a clique</h1>
            </div>
            <div className='img'>on recupere l'image</div>
            <div className='desc'>on recupere la desc et le reste, normalement</div>
        </div>
        </div>)

}

export default PokemonType;