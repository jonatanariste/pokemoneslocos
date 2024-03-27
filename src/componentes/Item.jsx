import { Link } from "react-router-dom";
import Contexto from "../contexto/Contexto";
import { useContext } from "react";
function Item(props) {
    const {name, url} = props
    const {guardamePokemon} = useContext(Contexto)


    let urlCortada = url.split("/")
   const handleGuardar = ()=>{
    guardamePokemon({name:name, url:url})
   }
    return ( <>
    <li> <Link to={"/pokemones/"+urlCortada[6]}>{name}</Link> <button onClick={handleGuardar}>Guardar Favorito</button></li>
    </> );
}

export default Item;