import { useState } from "react"
import Pepeloco from "../componentes/Pepeloco"
function Somos() {
    //es js puro
    const [imput, setImput] = useState("")
    const [hijito, setHijito] = useState("")

    const humano = {nombre:"Lalo", edad:33}
   
    let jj = ()=>{
        alert ("lola te kiero")
    }
    const barbisloco = (e)=>{
        console.log(e.target.value)
       setImput(e.target.value) 
    }


    //lo que ve el usuario
    return (<>
    <input type="text" onChange={barbisloco}/>
    <h1>{imput}</h1> 
    <Pepeloco nn={imput} accion={jj} {...humano} seteame={setHijito}></Pepeloco>

    <h1>{hijito}</h1>
    
    </>  );


}

export default Somos;