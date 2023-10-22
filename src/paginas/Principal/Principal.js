import {Fundo, CardP, CardR, Img, Imagem} from './Principal.jsx'
import Relogio from '../../assets/alarme.png'
import Lua from '../../assets/lua.png'
import {Button} from '@chakra-ui/react'

import {Link} from "react-router-dom"
function Principal (){
      
    return(
        <>
        
        <Fundo>
            
            
            <CardP>
                <Img src={Relogio}/>

            </CardP>

            <CardR>   
                <Imagem src={Lua}/>
            </CardR>
            <Link to='/Dicas'>
            <Button background="#0D99FF" mt='60'color='black' height='50px' width='50%' borderRadius='70px' fontFamily='arial'>Dicas</Button>
            </Link>
        </Fundo>
        </>
    )
}

export default Principal