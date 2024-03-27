import Nieto from "./Nieto";

function Pepeloco(props) {
    let {nn, accion,nombre, edad, seteame } = props

    seteame("LA VIDA ES LOCA")
    return (  <>
    <button onClick={accion}>Dale</button>
    <h4>------{nn}{nombre}{edad}</h4>
<h1>--------------------------  NIETO</h1>
<Nieto accion={accion}></Nieto>
</>);
}

export default Pepeloco;