import {Fundo, CardP, CardR, Img} from './Principal.jsx'
import Relogio from '../../assets/alarme.png'

function Principal (){
    return(
        <>
        <Fundo>
            
        
            <CardP>
                <Img src={Relogio}/>

            </CardP>

            <CardR>   

            </CardR>

        </Fundo>
        </>
    )
}

export default Principal