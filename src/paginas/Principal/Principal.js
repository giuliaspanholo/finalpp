import {Fundo, CardP, CardR, Img, Imagem} from './Principal.jsx'
import Relogio from '../../assets/alarme.png'
import Lua from '../../assets/lua.png'

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
            
        </Fundo>
        </>
    )
}

export default Principal