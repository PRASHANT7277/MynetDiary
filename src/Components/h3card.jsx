import { Box, Image} from "@chakra-ui/react";
import { Link } from "react-router-dom";
 import data from '../Utils/data.json'
export default function Card4(){
    return(
        <>
        
    <Box id='d'>

       <Box className='c' ml='8%'>
           
           <Box  w='600px'   ><Image  src={data[7].avatar} alt='...'/></Box>
           <Box mt='3'ml='2' fontSize='20'>{data[7].date}</Box>
          <a href='https://www.mynetdiary.com/testing-your-blood-sugar.html'> <Box mt='5px' textAlign='centre' fontSize='30'color='#466391' w='600px'  fontWeight='bold'>{data[7].title}</Box></a>
           <Box fontSize='16' textAlign='center' color='#46618A' w='600px'  fontWeight='semibold'>{data[7].desc}</Box>
       </Box>
       <Box className='c' ml='20'>
          
           <Box   w='600px'><Image   src={data[8].avatar} alt='...'/></Box>
           <Box mt='3'ml='2' fontSize='20'>{data[8].date}</Box>
           <a href='https://www.mynetdiary.com/herbs-for-health-and-healing.html'><Box mt='5px' textAlign='center' fontSize='30'color='#466391' w='600px' fontWeight='bold'>{data[8].title}</Box></a>
           <Box fontSize='16' textAlign='center' color='#46618A' w='600px'  fontWeight='semibold'>{data[8].desc}</Box>
       </Box>
       <Box className='c' ml='8%'>
           
           <Box   w='600px'><Image src={data[9].avatar} alt='...'/></Box>
           <Box mt='3'ml='2' fontSize='20'>{data[9].date}</Box>
           <Box mt='5px'textAlign='center' fontSize='30'color='#466391' w='600px' fontWeight='bold'>{data[9].title}</Box>
           <Box fontSize='16' textAlign='center' color='#46618A' w='600px'   fontWeight='semibold'>{data[9].desc}</Box>
       </Box>
       <Box className='c' ml='20'>
           
           <Box   w='600px'><Image src={data[10].avatar} alt='...'/></Box>
           <Box mt='3'ml='2' fontSize='20'>{data[10].date}</Box>
           <Box mt='5px'textAlign='center' fontSize='30'color='#466391' w='600px' fontWeight='bold'>{data[10].title}</Box>
           <Box fontSize='16' textAlign='center' color='#46618A' w='600px'  fontWeight='semibold'>{data[10].desc}</Box>
       </Box>
       <Box className='c' ml='8%'>
            
           <Box   w='600px'   ><Image  src={data[11].avatar} alt='...'/></Box>
           <Box mt='3'ml='2' fontSize='20'>{data[11].date}</Box>
           <Box mt='5px' textAlign='center' fontSize='30'color='#466391' w='600px'  fontWeight='bold'>{data[11].title}</Box>
           <Box fontSize='16' textAlign='center' color='#46618A' w='600px'  fontWeight='semibold'>{data[11].desc}</Box>
       </Box>
       <Box className='c' ml='20'>
          
           <Box   w='600px'><Image   src={data[12].avatar} alt='...'/></Box>
           <Box mt='3'ml='2' fontSize='20'>{data[12].date}</Box>
           <Box mt='5px' textAlign='center' fontSize='30'color='#466391' w='600px' fontWeight='bold'>{data[12].title}</Box>
           <Box fontSize='16' textAlign='center' color='#46618A' w='600px'  fontWeight='semibold'>{data[12].desc}</Box>
       </Box>
       <Box className='c' ml='8%'>
           
           <Box   w='600px'><Image src={data[13].avatar} alt='...'/></Box>
           <Box mt='3'ml='2' fontSize='20'>{data[13].date}</Box>
           <Box mt='5px'textAlign='center' fontSize='30'color='#466391' w='600px' fontWeight='bold'>{data[13].title}</Box>
           <Box fontSize='16' textAlign='center' color='#46618A' w='600px'   fontWeight='semibold'>{data[13].desc}</Box>
       </Box>
       <Box className='c' ml='20'>
           
           <Box   w='600px'><Image src={data[14].avatar} alt='...'/></Box>
           <Box mt='3'ml='2' fontSize='20'>{data[14].date}</Box>
           <Box mt='5px'textAlign='center' fontSize='30'color='#466391' w='600px' fontWeight='bold'>{data[14].title}</Box>
           <Box fontSize='16' textAlign='center' color='#46618A' w='600px'  fontWeight='semibold'>{data[14].desc}</Box>
       </Box>
       <Box className='c' ml='8%'>
            
           <Box   w='600px'   ><Image  src={data[15].avatar} alt='...'/></Box>
           <Box mt='3'ml='2' fontSize='20'>{data[15].date}</Box>
           <Box mt='5px' textAlign='center' fontSize='30'color='#466391' w='600px'  fontWeight='bold'>{data[15].title}</Box>
           <Box fontSize='16' textAlign='center' color='#46618A' w='600px'  fontWeight='semibold'>{data[15].desc}</Box>
       </Box>
       <Box className='c' ml='20'>
          
           <Box   w='600px'><Image   src={data[16].avatar} alt='...'/></Box>
           <Box mt='3'ml='2' fontSize='20'>{data[16].date}</Box>
           <Box mt='5px' textAlign='center' fontSize='30'color='#466391' w='600px' fontWeight='bold'>{data[16].title}</Box>
           <Box fontSize='16' textAlign='center' color='#46618A' w='600px'  fontWeight='semibold'>{data[16].desc}</Box>
       </Box>
       <Box className='c' ml='8%'>
           
           <Box   w='600px'><Image src={data[17].avatar} alt='...'/></Box>
           <Box mt='3'ml='2' fontSize='20'>{data[17].date}</Box>
           <Box mt='5px'textAlign='center' fontSize='30'color='#466391' w='600px' fontWeight='bold'>{data[17].title}</Box>
           <Box fontSize='16' textAlign='center' color='#46618A' w='600px'   fontWeight='semibold'>{data[17].desc}</Box>
       </Box>
       <Box className='c' ml='20'>
            
           <Box   w='600px'><Image src={data[18].avatar} alt='...'/></Box>
           <Box mt='3'ml='2' fontSize='20'>{data[18].date}</Box>
           <Box mt='5px'textAlign='center' fontSize='30'color='#466391' w='600px' fontWeight='bold'>{data[18].title}</Box>
           <Box fontSize='16' textAlign='center' color='#46618A' w='600px'  fontWeight='semibold'>{data[18].desc}</Box>
       </Box>
    </Box>
        </>
    )
}