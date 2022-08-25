import c from  '../Images/c.png'
import d from  '../Images/d.png'
import e from  '../Images/e.png'
import k from  '../Images/k.png'
import j from  '../Images/j.png'
import {Box, Image,Button } from '@chakra-ui/react'
import Card from './hcard'
import Card2 from './h1card'
import Card3 from './h2card'
import Carousel from './Carousel'
import Navbar from './Navbar'
import Footer from './footer'

export default function Home(){
    return(
        <>
        <Navbar/>
        <Box><Image src={c} alt='...'/></Box>
        <Box><Image src={d} alt='...'/></Box>
        <Box mt='100' ml='30%' fontSize='35'color='#46618A'  fontWeight='semibold'>“You really can't go wrong with MyNetDiary</Box>
        <Box ml='25%' fontSize='35' color='#46618A' fontWeight='semibold'>as a scientifically-proven way to help you lose weight”</Box>
        <Box><Image src={e} alt='...'/></Box>
        <Card/>
        <Box mt='90' mb='50' fontSize='50'color='#268FD0' textAlign='center' fontWeight='bold'>Top Rated Calorie Counter App</Box>
        <Box fontSize='30' textAlign='center' color='#46618A' w='88%' m='auto'  fontWeight='semibold'>“This is my favorite food diary app. I used six of the "top" apps in this category for several days so that I could compare them and select what worked best for me. MyNetDiary was the winner. Intuitive, simple layout, decent database, appealing graphic design, and no ads.”</Box>
        <Box mt='100px' textAlign='center'><Button  fontSize='26' bgColor='white'  color='#0BB850' border='1px solid #0BB850' pl='10' pr='10' pt='10' pb='10'borderRadius='50px'>SEE MORE TESTIMONIALS ➤</Button></Box>
        <Box  mt='100px' mb='100px' border='0.1px dotted grey' w='95%' ml='2.5%'></Box>
        <Card2/>
        <Box mt='100px' textAlign='center'><Button  fontSize='26' bgColor='white'  color='#0BB850' border='1px solid #0BB850' pl='10' pr='10' pt='10' pb='10'borderRadius='50px'>MORE FEATURES ➤</Button></Box>
        <Box mt='70px' ml='5%' w="90%"><Carousel/> </Box>
        <Box mt='90' mb='50' fontSize='50'color='#268FD0' textAlign='center' fontWeight='bold'>Being Healthy Has Never Been Easier</Box>
        <Card3/>
        <Box mt='100px' mb='40px' textAlign='center'><Button  fontSize='26' bgColor='white'  color='#0BB850' border='1px solid #0BB850' pl='10' pr='10' pt='10' pb='10'borderRadius='50px'>VIEW ALL ARTICLES ➤</Button></Box>
        <Box><Image src={k} alt='...'/></Box>
        <Box><Image src={j} alt='...'/></Box>
        <Footer/>
        </>
    )
}