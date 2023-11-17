import {Fundo} from './Soneca.jsx'
import Footer from '../../componentes/footer/Footer.js'
import { Link } from 'react-router-dom'
import { Button, Stack} from '@chakra-ui/react'

function Soneca (){
      
    return(
        <>
        
        <Fundo>

        <Link to="/BoaN">
            <Button background="#0D99FF"color='white' height='50px'width='40%'marginLeft='30%'borderRadius='70px'marginTop='700px'>CONCLUÍDO</Button>
            </Link>

            <Stack direction='row' spacing={4} align='center'>
               
            <h1 colorScheme='white' variant='ghost' color='white' marginTop='100px'>
            ADICIONAR SEUS DADOS ANTES DE DORMIR
            </h1>
           
            </Stack>
            <Footer/>

        </Fundo>
        </>
    )
}

export default Soneca