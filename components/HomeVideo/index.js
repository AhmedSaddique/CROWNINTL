import Image from 'next/image'
import React, { useEffect } from 'react'
import imagevideo from '../../public/assets/images/imgvideo.png'
import Button from '../Button'
import { DiGoogleCloudPlatform } from "react-icons/di";
import finger from '../../public/assets/images/finger.png'
import Badges from '../Badges';
import { HeadingH3 } from '../Heading';
import Container from '../Container';
import { useTheme } from 'next-themes';


const HomeVideo = () => {
  const { theme, setTheme } = useTheme();
 
  return (
    <>
    <Container className={'backdrop-blur-3xl '}>
    <div className='pt-10'>
    <div className='grid grid-cols-1 md:grid-cols-2 rounded-md shadow   space-y-10 ' >
    <div className='hidden md:flex'>
        <Image src={imagevideo} alt='imagevideo' className='rounded-l-md'  />
    </div>
    <div className={` p-5 md:p-8 lg:p-10 space-y-4 relative ${theme === 'dark' ? 'text-primary-black' :
   'text-primary-white'} `}>

        <Badges title={"Mission"} className={`${theme === 'dark' ? 'bg-primary-alertlight' :
   'text-primary-white'} shadow-md text-center  border-none `}/>
        <HeadingH3 className="" title={"Our Mission"}/>
        <p className=' '>Crown International Technology’s aim is to empower people, businesses, and organisations throughout the world by utilising cutting-edge digital technology. We work hard to provide cutting-edge solutions that boost productivity, connection, and efficiency while promoting sustainable growth. We strive to change the digital environment, inspire technical innovation, and enable our clients to succeed in the constantly changing digital era through our knowledge, creativity, and unrelenting pursuit of excellence.</p>
        <Button className='border-none bg-gradient-to-r from-primary-btn1 hover:from-primary-btn3 via-primary-btn2 to-primary-btn3 hover:to-primary-btn1 text-primary-white transition duration-400 shadow-md  ' btnicon={<DiGoogleCloudPlatform size={25} />} text={"Learn More"}/>
        <div>
        <Image src={finger} alt='finger' className='absolute bottom-0 right-0'/>
        </div>
    </div>
    </div>
    </div>
    </Container>
   
 
    </>
  )
}

export default HomeVideo