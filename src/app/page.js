
"use client"
import Hero from '@/components/HomeHero'
import LayoutProvider from '@/components/LayoutProvider'
import Testimonial from '@/components/Testimonial'
import AboutCore from '@/components/AboutCore'
import Container from '@/components/Container'
import Brand from '@/components/Brand'
import Information from '@/components/Information'
import imagevideo from '../../public/assets/images/imgvideo.png'
import { DiGoogleCloudPlatform } from 'react-icons/di'
import { useSession } from 'next-auth/react'


export default function Home() {
  return (
    <>

      <LayoutProvider>
      <div className={` relative `}>
        <div className={'relative z-10 backdrop-blur-md'}>  
        <Hero />
         <Brand/>
         <AboutCore/>
        <Information
          image={imagevideo}
          badge={"Mission"}
          title={'Our Mission'}
          para={'Crown International Technology’s aim is to empower people, businesses, and organisations throughout the world by utilising cutting-edge digital technology. We work hard to provide cutting-edge solutions that boost productivity, connection, and efficiency while promoting sustainable growth. We strive to change the digital environment, inspire technical innovation, and enable our clients to succeed in the constantly changing digital era through our knowledge, creativity, and unrelenting pursuit of excellence.'}
          link={`/about`}
          starticon={<DiGoogleCloudPlatform size={25} />}
          button={'Learn More'}

        />
        <Testimonial />
        </div>
        </div>
        <Container>
        <div className='g1 w-[300px] h-[300px] xs:w-[390px] xs:h-[450px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] mt-[10%] xs:mt-[5%]   xs:ml-[5%] sm:mt-[5%]   sm:-ml-[6%] md:mt-[5%]   md:-ml-[5%] lg:mt-[5%]   lg:-ml-[5]  xl:mt-[5%]  xl:-ml-[5%] '></div>
        <div className='g2 w-[300px] h-[300px] xs:w-[390px] xs:h-[450px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] mt-[30%] xs:mt-[40%]  xs:ml-[5%] sm:mt-[20%]  sm:ml-[15%] md:mt-[18%]  md:ml-[20%] lg:mt-[15%]  lg:ml-[20%] xl:mt-[10%] xl:ml-[15%]  '></div>
        <div className='g3 w-[300px] h-[300px] xs:w-[390px] xs:h-[450px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] mt-[140%] xs:mt-[120%] xs:ml-[5%] sm:mt-[75%]  sm:ml-[35%] md:mt-[70%]  md:ml-[35%] lg:mt-[50%]  lg:ml-[45%] xl:mt-[35%] xl:ml-[35%]  '></div>
        <div className='g4 w-[300px] h-[300px] xs:w-[390px] xs:h-[450px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] mt-[200%] xs:mt-[180%] xs:ml-[5%] sm:mt-[115%] sm:ml-[5%]  md:mt-[100%] md:-ml-[5%] lg:mt-[80%]  lg:ml-[25%] xl:mt-[50%] xl:ml-[58%]  '></div>
        <div className='g1 w-[300px] h-[300px] xs:w-[390px] xs:h-[450px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] mt-[260%] xs:mt-[240%] xs:ml-[5%] sm:mt-[150%] sm:ml-[35%] md:mt-[130%] md:ml-[30%] lg:mt-[110%] lg:-ml-[5%] xl:mt-[70%] xl:ml-[35%]  '></div>
        <div className='g2 w-[300px] h-[300px] xs:w-[390px] xs:h-[450px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] mt-[310%] xs:mt-[280%] xs:ml-[5%] sm:mt-[170%] sm:-ml-[5%] md:mt-[150%] md:-ml-[5%] lg:mt-[120%] lg:ml-[20%] xl:mt-[90%] xl:ml-[15%]  '></div>
        <div className='g3 w-[300px] h-[300px] xs:w-[390px] xs:h-[450px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] mt-[390%] xs:mt-[350%] xs:ml-[5%] sm:mt-[210%] sm:ml-[35%] md:mt-[180%] md:ml-[30%] lg:mt-[150%] lg:ml-[45%] xl:mt-[110%] xl:ml-[35%]  '></div>
        <div className='g4 w-[300px] h-[300px] xs:w-[390px] xs:h-[450px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] mt-[470%] xs:mt-[360%] xs:ml-[5%] sm:mt-[250%] sm:-ml-[5%] md:mt-[210%] md:-ml-[5%] lg:mt-[150%] lg:ml-[25%] xl:mt-[100%] xl:ml-[58%]  '></div>
        <div className='g2 w-[300px] h-[300px] xs:w-[390px] xs:h-[450px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] mt-[590%] xs:mt-[410%]  xs:ml-[5%] sm:hidden'></div>
        <div className='g3 w-[300px] h-[300px] xs:w-[390px] xs:h-[450px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] mt-[660%] xs:mt-[480%]  xs:ml-[5%] sm:hidden'></div>
        <div className='g4 w-[300px] h-[300px] xs:w-[390px] xs:h-[450px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] mt-[700%] xs:mt-[540%]  xs:ml-[5%] sm:hidden'></div>
        <div className='g1 w-[300px] h-[300px] xs:w-[390px] xs:h-[450px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] mt-[750%] xs:hidden'></div>
        <div className='g2 w-[300px] h-[300px] xs:w-[390px] xs:h-[450px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] mt-[800%] xs:hidden'></div>
        <div className='g3 w-[300px] h-[300px] xs:w-[390px] xs:h-[450px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] mt-[880%] xs:hidden'></div>
        <div className='g4 w-[300px] h-[300px] xs:w-[390px] xs:h-[450px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] mt-[940%] xs:hidden'></div>
      </Container>
      </LayoutProvider>
    </>


  )
}
