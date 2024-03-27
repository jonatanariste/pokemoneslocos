//TYPES
const LISTAME_POKEMONES = "LISTAME_POKEMONES"
const DAME_POKEMON = "DAME_POKEMON"
const GUARDAME_POKEMON = "GUARDAME_POKEMON"
const ELIMINAME_POKEMON = "ELIMINAME_POKEMON"

export default function Reducer(state, action){
const { payload, type} = action
switch( type){
    case LISTAME_POKEMONES:
        return {...state, pokemones: payload}
    case GUARDAME_POKEMON:
            return {...state, 
                favoritos: [...state.favoritos, payload]}
    case ELIMINAME_POKEMON:
    return {...state, 
         favoritos: [...state.favoritos, payload]}
}
}