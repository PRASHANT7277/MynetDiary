import Footer from "./footer";
import Navbar from "./Navbar";
import { Box} from '@chakra-ui/react'
import Card4 from "./h3card";
export default function Wblog(){
    return(
        <>
        <Navbar/>
        <Box>
            <Box height='100px' fontSize='60' textAlign='center' fontWeight='bold' backgroundColor='#099E44' color='white'>Weight Loss Dietitian Blog</Box>
        </Box>
        <Box mt='100px' mb='100px'><Card4/></Box>
        <Footer/>
        </>
    )
}