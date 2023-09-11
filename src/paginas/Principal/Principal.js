import {Fundo, Imagem, CardP, CardR} from './Principal.jsx'
import ImgPraia from '../../assets/praia-som.webp'
import ImgFogueira from '../../assets/fogueira.jpg'


function Principal (){
    return(
        <>
        <Fundo>
            
        <Imagem src={ImgPraia}/>
        <Imagem src={ImgFogueira}/>
        
        <CardP>

        </CardP>

        <CardR>   

        </CardR>

        </Fundo>
        </>
    )
}

export default Principal