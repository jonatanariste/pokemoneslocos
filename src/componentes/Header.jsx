import { Link } from "react-router-dom";
import Tonto from "./Tonto";
import { useState, useEffect } from "react";
function Header() {
    const [usuario, setUsuario] = useState(false)

const tekiero = ()=>{
    console.log("DESDE HEAFER")
}

useEffect(()=>{
    console.log("useEffect()")
    //setUsuario(true)
},[])

    return ( <header>
        <nav><Link to={"/"}>home</Link> <Link to={"/somos"}>somos</Link> <Link to={"/contacto"}>contacto</Link> {usuario ? <p>desloguear</p>: <p>loguear</p>  } </nav>

    </header> );
}

export default Header;