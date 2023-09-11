import {Fundo, CardLogin, Imagem, Estilização} from "./Login.jsx"
import ImgLogo from '../../assets/logoss.png'
import {Input, Button } from '@chakra-ui/react'
import {Link} from "react-router-dom"

function Login (){
    return (
        <>
        <Fundo>
        <Imagem src={ImgLogo}/>
            <CardLogin>
            <Estilização>
            <Input variant='Email' placeholder='Email' width='90%' height='35px'/>
            <Input variant='Senha' placeholder='Senha' width='90%' height='35px' mt='10%'/>
            </Estilização>
            <Link to= "/Cadastro">
            <Button colorScheme='blue' variant='link' marginLeft='250px'>Cadastrar</Button>
            </Link>

            </CardLogin>

            <Link to="/Principal">
            <Button background="#0D99FF"color='white' height='50px'width='40%'marginLeft='30%'borderRadius='70px'>ENTRAR</Button>
            </Link>
        </Fundo>
        </>
    )
}

export default Login