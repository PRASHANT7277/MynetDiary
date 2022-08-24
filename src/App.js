import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

//import AllRoutes from './components/allroute';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <BrowserRouter>
        {/* <AllRoutes/> */}
        <Navbar/>
        <Home/>
        </BrowserRouter>
      
      </ChakraProvider>
     
      
    </div>
  );
}

export default App;
