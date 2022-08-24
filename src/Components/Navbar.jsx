import { Flex, Spacer,Box, Image } from '@chakra-ui/react'

import b from  '../Images/b.png'

export default function Navbar(){
    return(
        <>
       <Box bgColor='#099E44'>
        <Flex>
          <Box display='flex' p='4' bg='#099E44'>
            <Box ><Image src={b} alt='...'/></Box>
            <Box mt='3' ml='3'fontSize='40' color='white' fontWeight='semibold'>MyNetDiary</Box>
         </Box>
        <Spacer />
         <Box display='flex'  p='4' bg='#099E44' mt='10'>
            <Box fontSize='20' color='white'> Features</Box>
            <Box ml='3' fontSize='20' color='white'>▪ Diets</Box>
            <Box ml='3' fontSize='20' color='white'>▪ Library</Box>
            <Box ml='3' fontSize='20' color='white'>▪ Food</Box>
            <Box ml='3' fontSize='20' color='white'>▪ Business</Box>
        </Box>
          <Spacer />
         <Box display='flex' p='4' bg='#099E44'>
            <Box mt='5' border='1px solid lightgreen' pt='3' pl='9' pr='9' fontSize='20' color='white' bgColor='orange' fontWeight='semibold' borderRadius='30'>SIGN UP</Box>
            <Box  mt='5' ml='4' border='1px solid lightgreen' pt='3' pl='9' pr='9' fontSize='20' color='white' fontWeight='semibold' borderRadius='30'>SIGN IN</Box>
          </Box>
         </Flex>
         </Box>
         
        </>
    )
}