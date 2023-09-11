import { BotaoEstilo } from "./Botao.jsx";
import { Button } from "@chakra-ui/react";

function Botao (){
    return(
        <>
        <Button colorScheme='blue'>Button</Button>
        <BotaoEstilo></BotaoEstilo>
        </>
    )
}

export default Botao;