import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';


import AllRoutes from './Components/AllRoutes';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <ChakraProvider>
        <AllRoutes/>
        {/* <Home/> */}
       </ChakraProvider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
