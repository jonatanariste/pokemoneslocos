import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../componentes/Layout";
import Home from "../contenedores/Home";
import Contacto from "../contenedores/Contacto";
import Somos from "../contenedores/Somos";
import Pokemones from "../contenedores/Pokemones";
import Pokemon from "../contenedores/Pokemon";
import UsarContexto from "../contexto/UsarContexto";
function App() {
  return (
    <BrowserRouter>
    <UsarContexto>
      <Layout> 
        <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/contacto" element={<Contacto />}></Route>
      <Route path="/somos" element={<Somos />}></Route>     
      <Route path="/pokemones" element={<Pokemones />}></Route>     
      <Route path="/pokemones/*" element={<Pokemon/>}></Route>     
      </Routes> 
      </Layout>
      </UsarContexto>
    </BrowserRouter>
   
  );
}

export default App;
