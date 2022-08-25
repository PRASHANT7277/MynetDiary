import { Box, Image,Text} from "@chakra-ui/react";
 import data from '../Utils/data.json'
export default function Card3(){
    return(
        <>
        
    <Box id='d'>

       <Box className='c' ml='8%'>
           <Box   w='600px'   ><Image  src={data[7].avatar} alt='...'/></Box>
           <Box mt='20px' textAlign='center' fontSize='30'color='#466391' w='600px'  fontWeight='bold'>{data[7].title}</Box>
           <Box fontSize='16' textAlign='center' color='#46618A' w='600px'  fontWeight='semibold'>{data[7].desc}</Box>
       </Box>
       <Box className='c' ml='20'>
           <Box   w='600px'><Image   src={data[8].avatar} alt='...'/></Box>
           <Box mt='20px' textAlign='center' fontSize='30'color='#466391' w='600px' fontWeight='bold'>{data[8].title}</Box>
           <Box fontSize='16' textAlign='center' color='#46618A' w='600px'  fontWeight='semibold'>{data[8].desc}</Box>
       </Box>
       <Box className='c' ml='8%'>
           <Box   w='600px'><Image src={data[9].avatar} alt='...'/></Box>
           <Box mt='20px'textAlign='center' fontSize='30'color='#466391' w='600px' fontWeight='bold'>{data[9].title}</Box>
           <Box fontSize='16' textAlign='center' color='#46618A' w='600px'   fontWeight='semibold'>{data[9].desc}</Box>
       </Box>
       <Box className='c' ml='20'>
           <Box   w='600px'><Image src={data[10].avatar} alt='...'/></Box>
           <Box mt='20px'textAlign='center' fontSize='30'color='#466391' w='600px' fontWeight='bold'>{data[10].title}</Box>
           <Box fontSize='16' textAlign='center' color='#46618A' w='600px'  fontWeight='semibold'>{data[10].desc}</Box>
       </Box>
       
    </Box>
        </>
    )
}