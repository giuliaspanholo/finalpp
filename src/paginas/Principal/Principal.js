import {Fundo, CardP, CardR, Img, Imagem, Imagem1, Imagem2, Imagem3, Imagem4} from './Principal.jsx'
import Relogio from '../../assets/alarme.png'
import Lua from '../../assets/lua.png'
import Imagemfog from '../../assets/fogueira.jpeg'
import ImagemChu from '../../assets/chuvs.jpg'
import Praia from '../../assets/praia-som.webp'
import Flore from '../../assets/flore.jpeg'
import {Button} from '@chakra-ui/react'
import {Stack} from '@chakra-ui/react'
import Footer from '../../componentes/footer/Footer.js'


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
            


            <Link to="/Fogueira">
            <Stack direction='column' spacing={5} align='center' height='100px'>
 
             <Button colorScheme='whiteAlpha' variant='ghost' marginLeft='-210px' height='500px' marginTop='200px' color='white' borderRadius='30vh'>
                FOGUEIRA LENTA
            </Button>
           
            <Imagem1 src={Imagemfog} left='100px'/>
            </Stack>
            </Link>





            <Link to="/Ondas">
            <Stack direction='column' spacing={5} align='center' height='100px'>
 
             <Button colorScheme='whiteAlpha' variant='ghost' height='500px' marginLeft='200px'marginBottom='2px' color='white' borderRadius='30px'>
                ONDAS DO MAR
            </Button>
            <Imagem2 src={Praia} left='100px' borderRadius='30px'/>
            </Stack>
            </Link>

            






            <Link to="/Chuva">
            <Stack direction='column' spacing={5} align='center' height='100px'>
 
             <Button colorScheme='whiteAlpha' variant='ghost' marginLeft='-210px' height='500px' marginTop='245px' color='white' borderRadius='30vh'>
                CHUVINHA
            </Button>
           
            <Imagem3 src={ImagemChu} left='100px'/>
            </Stack>
            </Link>






            <Link to="/Floresta">
            <Stack direction='column' spacing={5} align='center' height='100px'>
 
             <Button colorScheme='whiteAlpha' variant='ghost' marginLeft='200px' height='500px' marginBottom='-210px' color='white' borderRadius='30vh'>
                FLORESTA
            </Button>
           
            
            </Stack>
            </Link>
            <Imagem4 src={Flore}/>
            <Footer/>



        </Fundo>
        </>
    )
}

export default Principal