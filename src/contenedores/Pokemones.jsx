import { useEffect, useState, useContext } from "react";
import Contexto from "../contexto/Contexto";
import Item from "../componentes/Item";
//import axios from "axios";
function Pokemones() {
    const {pokemones, traemePokemones} = useContext(Contexto)

    //const [pokemones, setPokemones] = useState([])
   // const trameProductos = async ()=>{
    //    const res = await axios.get("https://pokeapi.co/api/v2/pokemon/")
    //    setPokemones(res.data.results)
   // }
    useEffect(()=>{
       // trameProductos()
       traemePokemones()
    },[])


    return ( <>
    
    <ul>
        {pokemones.map((pokemon)=> <Item {...pokemon} key={pokemon.name}></Item>)}
    </ul>
 
    
    </> );
}

export default Pokemones;