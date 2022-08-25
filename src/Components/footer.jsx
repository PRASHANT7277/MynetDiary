import {Box,Image, Text,Flex,Spacer} from "@chakra-ui/react"
import a from '../Images/a.png'
import {BsFacebook,BsInstagram,BsTwitter,BsPinterest} from "react-icons/bs"
import {TiSocialYoutubeCircular} from 'react-icons/ti'

export default function Footer(){

    return (
    <Box>
    <Box id="footer">
    <Box className="fdiv">
        <Box display='flex' ml='10' mt='-5'>
            <Box ><Image src={a} alt='...'/></Box>
            <Box fontSize='30' color='green' mt='2' fontWeight='semibold'>MyNetDiary</Box>
        </Box>
       
        <Box display='flex' ml='5' mr='7' mt='5'>
            <Box ><Image w='800px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png' alt='...'/></Box>
            <Box ><Image   src='https://www.designpieces.com/wp-content/uploads/2016/02/google-play-badge.png' alt='...'/></Box>
        </Box>
       <Box  ml='5' mt='5' mr='5' fontSize='20'>★★★★★ 4.9 • 61,383 Ratings</Box>
       <Box display='flex' ml='5' mt='5'>
            
            <Box fontSize='30' ml='5'><a href='https://www.instagram.com/mynetdiary/ '>< BsInstagram/></a></Box>
            <Box fontSize='30' ml='5'><a  href='https://www.facebook.com/mynetdiary/ '><BsFacebook/></a></Box>
            <Box fontSize='30' ml='5'><a  href='https://twitter.com/mynetdiary/ '><BsTwitter/></a></Box>
            <Box fontSize='30' ml='5'><a  href='https://www.youtube.com/user/MyNetDiary/ '><TiSocialYoutubeCircular/></a></Box>
            <Box fontSize='30' ml='5'><a  href='https://www.pinterest.com/mynetdiary/ '><BsPinterest/></a></Box>
            
        </Box>
       
        
    </Box>
    <Box className="fdiv">
        <Text mb='40px' as='h4'fontWeight='semibold'color='#4C618A' >APP FEATURES</Text>
        
        <h5 ><a href='https://www.mynetdiary.com/iPhone.html'>• iPhone & iPad app</a></h5>
        <h5><a href='https://play.google.com/store/apps/details?id=com.fourtechnologies.mynetdiary.ad&referrer=utm_source%3Dwebsite%26utm_campaign%3Dfooter_link'>• Android app</a></h5>
        <h5><a href='https://www.mynetdiary.com/keto-diet.html'>• Keto Diet</a></h5>
        <h5><a href='https://www.mynetdiary.com/low-carb-diet.html'>• Low-Carb Diet</a></h5>
        <h5><a href='https://www.mynetdiary.com/premium-calorie-counting-diet.html'>• Premium Calorie Counting</a></h5>
        <h5><a href='https://www.mynetdiary.com/mynetdiary-vs-myfitnesspal.html'>• MyNetDiary vs MyFitnessPal</a></h5>
    </Box>
    <Box className="fdiv">
    <Text as='h4'mb='40px' fontWeight='semibold'color='#4C618A'>EIGHT LOSS SCIENCE</Text>
   
        
        <h5><a href='https://www.mynetdiary.com/blog.html'>• Weight Loss Blog</a></h5>
        <h5><a href='https://www.mynetdiary.com/library.html'>• Diet Library</a></h5>
        <h5><a href='https://www.mynetdiary.com/authors.html'>• Dietitian Team</a></h5>
        

    </Box>
    <Box className="fdiv">
    <Text as='h4' mb='40px' fontWeight='semibold'color='#4C618A'>BUSINESS</Text>
    
        <h5><a href='https://www.mynetdiary.com/groupDiscount.do'>• Gift cards & Group discounts</a></h5>
        <h5><a href='https://www.mynetdiary.com/food-diary-and-calorie-counter-for-trainers.html'>• For trainers</a></h5>
        <h5><a href='https://www.mynetdiary.com/food-diary-and-calorie-counter-for-nutritionists.html'>• For healthcare professionals</a></h5>
        <h5><a href='https://www.mynetdiary.com/food-diary-for-families.html'>• For families</a></h5>
        <h5><a href='https://www.mynetdiary.com/food-database.html'>• Food database licensing</a></h5>
        

        
    </Box>
    <Box className="fdiv">
    <Text as='h4' mb='40px' fontWeight='semibold'color='#4C618A'>COMPANY</Text>
    
        <h5><a href='https://www.mynetdiary.com/about.html'>• About MyNetDiary</a></h5>
        <h5><a href='https://www.mynetdiary.com/mynetdiaryNews.html'>• In the News</a></h5>
        <h5><a href='https://www.mynetdiary.com/press-releases.html'>• Press Releases</a></h5>
        <h5><a href='https://www.mynetdiary.com/press-kit.html'>• Press Kit</a></h5>
       
    </Box>
</Box>
<Box bgColor='#F8F4F1'>
        <Flex>
          <Box  bg='#F8F4F1' color='#4C618' mt='10' ml='20'>Copyright © 2022 MyNetDiary Inc. All rights reserved.</Box>
        <Spacer />
         <Box display='flex'  p='8' bg='#F8F4F1' mt='3'>
            <Box  fontSize='16' color='#4C618'><a href='https://www.mynetdiary.com/contactUs.html'>Contact Us</a> </Box>
            <Box ml='3' fontSize='16' color='#4C618'><a href='https://www.mynetdiary.com/contactUs.html'>FAQ</a></Box>
            <Box ml='3' fontSize='16' color='#4C618'><a href='https://www.mynetdiary.com/contactUs.html'>Privacy</a ></Box>
            <Box ml='3' mr='10' fontSize='16' color='#4C618'><a  href='https://www.mynetdiary.com/contactUs.html' >Terms of Use</a></Box>
            
        </Box>
        </Flex>
</Box>
    
    </Box>
)
}