import { Fundo, Estilo, Card } from "./Cadastro.jsx"
import { Input, Button, Text } from '@chakra-ui/react'

import {Link} from "react-router-dom"

function Cadastro() {
    return (
        <>
            <Fundo>
                <Card justifyContent='space-between' align='center'>
                    <Estilo>
                    <Text mb='8px'mr='50%'color='white'>Nome completo:</Text>
                        <Input variant='Nome' placeholder='Nome' />

                    <Text mb='8px'mr='80%'color='white'mt='5'>Email:</Text>
                        <Input variant='Email' placeholder='Email' />

                    <Text mb='8px'mr='80%'color='white'mt='5'>Senha:</Text>
                        <Input variant='Senha' placeholder='Senha' />

                    <Text mb='8px'mr='45%'color='white'mt='5'>Confirmar Senha:</Text>
                        <Input variant='Confirmar senha' placeholder='Confirmar senha' />

                    </Estilo>
                    
                </Card>
                <Link to='/Login'>
                <Button background="#5FA1AF" mt='60'color='white' height='50px' width='120%' borderRadius='70px' fontFamily='arial'>LOGIN</Button>
                </Link>
            </Fundo>
        </>
    )
}

export default Cadastro