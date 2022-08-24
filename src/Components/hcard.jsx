import { Box, Image,Text} from "@chakra-ui/react";
 import data from '../Utils/data.json'
export default function Card(){
    return(
        <>
        
    <Box id='a'>
       <Box ml='15%'>
           <Box mt='50px' w='350px'><Image src={data[0].avatar} alt='...'/></Box>
           <Box mt='50px' ml='5%' fontSize='40'color='#268FD0'  fontWeight='bold'>{data[0].title}</Box>
           <Box fontSize='25'color='#46618A' w='550px'  fontWeight='semibold'>{data[0].desc}</Box>
       </Box>
       <Box ml='15%'>
           <Box mt='50px' w='350px'><Image src={data[0].avatar} alt='...'/></Box>
           <Box mt='50px' ml='5%' fontSize='40'color='#268FD0'  fontWeight='bold'>{data[0].title}</Box>
           <Box fontSize='25'color='#46618A' w='550px'  fontWeight='semibold'>{data[0].desc}</Box>
       </Box>
       <Box ml='15%'>
           <Box mt='50px' w='350px'><Image src={data[0].avatar} alt='...'/></Box>
           <Box mt='50px' ml='5%' fontSize='40'color='#268FD0'  fontWeight='bold'>{data[0].title}</Box>
           <Box fontSize='25'color='#46618A' w='550px'  fontWeight='semibold'>{data[0].desc}</Box>
       </Box>
       <Box ml='15%'>
           <Box mt='50px' w='350px'><Image src={data[0].avatar} alt='...'/></Box>
           <Box mt='50px' ml='5%' fontSize='40'color='#268FD0'  fontWeight='bold'>{data[0].title}</Box>
           <Box fontSize='25'color='#46618A' w='550px'  fontWeight='semibold'>{data[0].desc}</Box>
       </Box>
    </Box>
        </>
    )
}