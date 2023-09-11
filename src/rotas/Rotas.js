import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../paginas/Login/Login";
import Cadastro from "../paginas/Cadastro/Cadastro";
import Principal from "../paginas/Principal/Principal";

function Rotas (){

    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>}/>
                <Route element={<Cadastro/>} path="/Cadastro"/>
                <Route element={<Principal/>} path="/Principal"/>
            </Routes>
        </BrowserRouter>
        
    )
}

export default Rotas;