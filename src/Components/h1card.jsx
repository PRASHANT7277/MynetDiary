import { Box, Image,Text} from "@chakra-ui/react";
 import data from '../Utils/data.json'
export default function Card2(){
    return(
        <>
        
    <Box id='b'>

       <Box ml='6'>
           <Box className='c'  mt='30px' w='470px'  ml='2%' ><Image  src={data[4].avatar} alt='...'/></Box>
           <Box mt='50px' textAlign='center' fontSize='40'color='#268FD0'  fontWeight='bold'>{data[4].title}</Box>
           <Box fontSize='25' textAlign='center' color='#46618A' w='470px'  fontWeight='semibold'>{data[4].desc}</Box>
       </Box>
       <Box ml='6'>
           <Box  className='c' mt='30px' ml='2%' w='470px'><Image   src={data[5].avatar} alt='...'/></Box>
           <Box mt='50px' textAlign='center' fontSize='40'color='#268FD0'  fontWeight='bold'>{data[5].title}</Box>
           <Box fontSize='25' textAlign='center' color='#46618A' w='470px'  fontWeight='semibold'>{data[5].desc}</Box>
       </Box>
       <Box ml='6'>
           <Box className='c' mt='30px' ml='2%' w='470px'><Image src={data[6].avatar} alt='...'/></Box>
           <Box mt='50px'textAlign='center' fontSize='40'color='#268FD0'  fontWeight='bold'>{data[6].title}</Box>
           <Box fontSize='25' textAlign='center' color='#46618A' w='470px'  fontWeight='semibold'>{data[6].desc}</Box>
       </Box>
       
    </Box>
        </>
    )
}