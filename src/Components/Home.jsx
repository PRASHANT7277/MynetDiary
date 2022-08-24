import c from  '../Images/c.png'
import d from  '../Images/d.png'
import e from  '../Images/e.png'
import {Box, Image } from '@chakra-ui/react'
import Card from './hcard'

export default function Home(){
    return(
        <>
        <Box><Image src={c} alt='...'/></Box>
        <Box><Image src={d} alt='...'/></Box>
        <Box mt='100' ml='30%' fontSize='35'color='#46618A'  fontWeight='semibold'>“You really can't go wrong with MyNetDiary</Box>
        <Box ml='25%' fontSize='35' color='#46618A' fontWeight='semibold'>as a scientifically-proven way to help you lose weight”</Box>
        <Box><Image src={e} alt='...'/></Box>
        <Box mt='90' ml='30%' fontSize='50'color='#268FD0'  fontWeight='bold'>What it takes to succeed</Box>
        <Box>
            <Card/>
        </Box>
        </>
    )
}