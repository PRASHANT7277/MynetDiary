import { Flex, Spacer,Box, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import b from  '../Images/b.png'

export default function Navbar(){
    return(
        <>
       <Box bgColor='#099E44'>
        <Flex>
          <Box display='flex' p='4' bg='#099E44'>
           <Link to='/'><Box ><Image src={b} alt='...'/></Box></Link> 
            <Link to='/'><Box mt='3' ml='3'fontSize='40' color='white' fontWeight='semibold'>MyNetDiary</Box></Link>
         </Box>
        <Spacer />
         <Box display='flex'  p='4' bg='#099E44' mt='10'>
            <div class="dropdown">
               <button class="dropbtn">▪ Features</button>
               <div class="dropdown-content">
                    <a href="#">• iPhone & iPad app</a>
                    <a href="#">• Android app</a>
                    <a href="#">• User Reviews</a>
                    <a href="#">• MyNetDiary vs MyFitnessPal</a>
               </div>
            </div>
            <div class="dropdown">
               <button class="dropbtn">▪ Diets</button>
               <div class="dropdown-content">
                    <a href="#">• Calorie Counting</a>
                    <a href="#">• Low-Carb</a>
                    <a href="#">• Keto</a>
                    <a href="#">• High-Protein</a>
                    <a href="#">•  Mediterranean</a>
                    <a href="#">• Vegetarian</a>
                    <a href="#">• Vegan</a>
               </div>
            </div>
            <div class="dropdown">
               <button class="dropbtn">▪ Library</button>
               <div class="dropdown-content">
                    <a href="#">• Weight Loss Blog</a>
                    <a href="#">• Diet Library</a>
                    <a href="#">• Dietitian team</a>
               </div>
            </div>
            <div class="dropdown">
               <button class="dropbtn">▪ Food</button>
               <div class="dropdown-content">
                    <a href="#">• Food Search</a>
                    <a href="#">• Database Licensing & API</a>
                 
               </div>
            </div>
            <div class="dropdown">
               <button class="dropbtn">▪ Business</button>
               <div class="dropdown-content">
                    <a href="#">• Find Healthcare Professional</a>
                    <a href="#">• For Healthcare Professionals</a>
                    <a href="#">• For Trainers and Clubs</a>
                    <a href="#">• MyNetDiary vs MyFitnessPal</a>
                    <a href="#">• Food Database Licensing</a>
               </div>
            </div>
            
        </Box>
          <Spacer />
         <Box display='flex' p='4' bg='#099E44'>
            <Link to='/signup'><Box mt='5' border='1px solid lightgreen' pt='3' pb='3' pl='9' pr='9' fontSize='20' color='white' bgColor='orange' fontWeight='semibold' borderRadius='30'>SIGN UP</Box></Link>
           <Link to='/login'><Box  mt='5' ml='4' border='1px solid lightgreen' pb='3' pt='3' pl='9' pr='9' fontSize='20' color='white' fontWeight='semibold' borderRadius='30'>SIGN IN</Box></Link> 
          </Box>
         </Flex>
         </Box>
         
        </>
    )
}