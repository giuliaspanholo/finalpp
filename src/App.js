import Login from './paginas/Login/Login.js';
import Cadastro from './paginas/Cadastro/Cadastro.js';
import Principal from './paginas/Principal/Principal.js';
import Soneca from './paginas/Soneca/Soneca.js';
import Fogueira from './paginas/Fogueira/Fogueira.js';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Rotas from './rotas/Rotas.js';



function App() {
  return (
  <>
    <ChakraProvider>
    
    <Rotas/>
 
    </ChakraProvider>
  </>
    
  );
}

export default App;

