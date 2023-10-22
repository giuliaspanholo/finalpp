import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../paginas/Login/Login";
import Cadastro from "../paginas/Cadastro/Cadastro";
import Principal from "../paginas/Principal/Principal";
import Dicas from "../paginas/Dicas/Dicas";

function Rotas (){

    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>}/>
                <Route element={<Cadastro/>} path="/Cadastro"/>
                <Route element={<Principal/>} path="/Principal"/>
                <Route element={<Dicas/>} path="/Dicas"/>
            </Routes>
        </BrowserRouter>
        
    )
}

export default Rotas;