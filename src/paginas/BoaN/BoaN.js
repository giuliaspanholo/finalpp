import { Fundo, Img1 } from "./BoaN.jsx"
import { Stack, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import ImagemNuv from "../../assets/nuvem.webp"
function BoaN (){
    const buttonStyle = {
        position: 'absolute',
        top: '11px',
        left: '16px', // Ajuste a posição horizontal conforme necessário
      };
    return(
        <>
        
        <Fundo>
        <Stack direction='row' spacing={4} align='center'>
               <Link to="/Principal">
            <Button style={buttonStyle} colorScheme='white' variant='ghost' color='white' marginTop='11px'>
            ᐸ- Voltar
            </Button>
            </Link>
            </Stack>
            
        <Img1 src={ImagemNuv}/>
        </Fundo>
        </>
    )
}

export default BoaN