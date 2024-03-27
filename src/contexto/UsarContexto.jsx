import Contexto from "./Contexto";
import Reducer from "./Reducer";
import axios from "axios";

import { useReducer } from "react";
function UsarContexto(props) {
  const {children} = props
  const estadoInicial = {
    pokemones:[{name:"pikachu", url:""}],
    favoritos:[],
  }

const [state, dispatch] = useReducer(Reducer, estadoInicial) 

const saludar = (nombre)=>{
  alert("hola "+nombre)
}

const traemePokemones = async ()=>{
  console.log("traemePokemones")
    const res = await axios.get("https://summerhack2024-default-rtdb.firebaseio.com/Pokemones.json")
  dispatch({type:"LISTAME_POKEMONES", payload: res.data.results })

}

const guardamePokemon = (item)=>{
  console.log("guardamePokemon")
  dispatch({type:"GUARDAME_POKEMON", payload: item })
  console.log("favoritos:",state.favoritos)

}

  return ( <>
  <Contexto.Provider value={{saludar, guardamePokemon, traemePokemones, pokemones:state.pokemones, favoritos:state.favoritos}}>
    {children}
  </Contexto.Provider>
  </> );
}

export default UsarContexto;