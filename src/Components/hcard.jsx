import { Box, Image,Text} from "@chakra-ui/react";
 import data from '../Utils/data.json'
export default function Card(){
    return(
        <>
        
    <Box id='a'>
    <Box mt='90' ml='30%' fontSize='50'color='#268FD0'  fontWeight='bold' backgroundColor='#F7F3F0'>What it takes to succeed</Box>
       <Box ml='5%'>
           <Box mt='50px' w='400px' ml='20%' ><Image src={data[0].avatar} alt='...'/></Box>
           <Box mt='50px' textAlign='center' fontSize='40'color='#268FD0'  fontWeight='bold'>{data[0].title}</Box>
           <Box fontSize='25' textAlign='center' color='#46618A' w='650px'  fontWeight='semibold'>{data[0].desc}</Box>
       </Box>
       <Box ml='5%'>
           <Box mt='50px' ml='20%' w='500px'><Image src={data[1].avatar} alt='...'/></Box>
           <Box mt='50px' textAlign='center' fontSize='40'color='#268FD0'  fontWeight='bold'>{data[1].title}</Box>
           <Box fontSize='25' textAlign='center' color='#46618A' w='650px'  fontWeight='semibold'>{data[1].desc}</Box>
       </Box>
       <Box ml='5%'>
           <Box mt='50px' ml='20%' w='400px'><Image src={data[2].avatar} alt='...'/></Box>
           <Box mt='50px'textAlign='center' fontSize='40'color='#268FD0'  fontWeight='bold'>{data[2].title}</Box>
           <Box fontSize='25' textAlign='center' color='#46618A' w='650px'  fontWeight='semibold'>{data[2].desc}</Box>
       </Box>
       <Box ml='5%'>
           <Box mt='50px' ml='20%' w='400px'><Image src={data[3].avatar} alt='...'/></Box>
           <Box mt='50px'  fontSize='40'color='#268FD0' textAlign='center' fontWeight='bold'>{data[3].title}</Box>
           <Box fontSize='25'color='#46618A' w='650px'  fontWeight='semibold' textAlign='center'>{data[3].desc}</Box>
       </Box>
    </Box>
        </>
    )
}