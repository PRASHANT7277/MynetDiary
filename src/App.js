import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import ContextProvider from './context/context';

import AllRoutes from './Components/AllRoutes';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
       <ChakraProvider>
        <ContextProvider>
        <AllRoutes/>
        {/* <Home/> */}
        </ContextProvider>
       </ChakraProvider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
