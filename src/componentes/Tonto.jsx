function Tonto(props) {
   const {children, nombre} = props
    return (<><h1>SOY {children=="Jonatan Ariste"? children:"Sos Genial"}</h1>
    <p>y soy ademas: {nombre}</p>
    </>  );
}



export default Tonto;