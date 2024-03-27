import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
function Pokemon() {
    const location = useLocation()
    const [pokemon, setPokemon] = useState()
    const traemePokemon = async ()=>{
        const pedazos = location.pathname.split("/")
        const url = "https://pokeapi.co/api/v2/pokemon/"+pedazos[2]
        const res = await axios.get(url)
        setPokemon(res.data)
        console.log(res.data)
    }

    useEffect(()=>{
        traemePokemon()
    },[])

    
    return (<><h1>{pokemon?.name }</h1>
    <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
    </>  );
}

export default Pokemon;