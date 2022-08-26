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
                    <a href="https://www.mynetdiary.com/iPhone.html">• iPhone & iPad app</a>
                    <a href="https://play.google.com/store/apps/details?id=com.fourtechnologies.mynetdiary.ad&referrer=utm_source%3Dwebsite%26utm_campaign%3Dsticky_header">• Android app</a>
                    <a href="https://www.mynetdiary.com/user-reviews.html">• User Reviews</a>
                    <a href="https://www.mynetdiary.com/mynetdiary-vs-myfitnesspal.html">• MyNetDiary vs MyFitnessPal</a>
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
                    <Link to='/wblog' >• Weight Loss Blog</Link>
                    <a href="https://www.mynetdiary.com/library.html">• Diet Library</a>
                    <a href="https://www.mynetdiary.com/authors.html">• Dietitian team</a>
               </div>
            </div>
            <div class="dropdown">
               <button class="dropbtn">▪ Food</button>
               <div class="dropdown-content">
                    <a href="https://www.mynetdiary.com/foodSearch.do">• Food Search</a>
                    <a href="https://www.mynetdiary.com/food-database.html">• Database Licensing & API</a>
                 
               </div>
            </div>
            <div class="dropdown">
               <button class="dropbtn">▪ Business</button>
               <div class="dropdown-content">
                    <a href="https://www.mynetdiary.com/find-a-health-professional.html">• Find Healthcare Professional</a>
                    <a href="https://www.mynetdiary.com/food-diary-and-calorie-counter-for-nutritionists.html">• For Healthcare Professionals</a>
                    <a href="https://www.mynetdiary.com/food-diary-and-calorie-counter-for-trainers.html">• For Trainers and Clubs</a>
                    <a href="https://www.mynetdiary.com/mynetdiary_vs_myfitnesspal_professionals.html">• MyNetDiary vs MyFitnessPal</a>
                    <a href="https://www.mynetdiary.com/food-database.html">• Food Database Licensing</a>
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