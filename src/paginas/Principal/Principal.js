import {Fundo, Imagem, CardP, CardR} from './Principal.jsx'
import ImgPraia from '../../assets/praia-som.webp'



function Principal (){
    return(
        <>
        <Fundo>
        <Imagem src={ImgPraia}/>
            <CardP>
        
            </CardP>
            <CardR>
                
            </CardR>
        </Fundo>
        </>
    )
}

export default Principal