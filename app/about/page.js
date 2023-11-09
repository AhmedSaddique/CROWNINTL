"use client"
import Hero from '@/components/AboutHero'
import Blog from '@/components/Blog'
import ChooseUs from '@/components/HomeChoose'
import Newsletter from '@/components/HomeNewsletter'
import LayoutProvider from '@/components/LayoutProvider'
import Testimonial from '@/components/Testimonial'
import choosemain from '../../public/assets/images/choosemain.png'
import choose1 from '../../public/assets/images/choose1.png'
import choose3 from '../../public/assets/images/choose3.png'
import choosemain2 from '../../public/assets/images/choosemain2.png'
import choose2 from '../../public/assets/images/choose2.png'
import choose4 from '../../public/assets/images/choose4.png'
import React from 'react'
import Container from '@/components/Container'

const About = () => {
  return (
    <>
    <LayoutProvider>
    <div className={` relative `}>
        <div className={'relative z-10 backdrop-blur-md'}> 
      <Hero/>
      <ChooseUs
          maintitle={"CROWN Vision & Mission"}
          image1={choose1}
          mainimage={choosemain}
          image2={choose3}
          badge={"Mission"}
          choosetitle={"Our Mission"}
          choosepara={'Crown International Technology’s aim is to empower people, businesses, and organisations throughout the world by utilising cutting-edge digital technology. We work hard to provide cutting-edge solutions that boost productivity, connection, and efficiency while promoting sustainable growth. We strive to change the digital environment, inspire technical innovation, and enable our clients to succeed in the constantly changing digital era through our knowledge, creativity, and unrelenting pursuit of excellence.'}
          Choosedata={[
            { id: "1", title: "Send & Schedule Posts" },
            { id: "2", title: " Online Visitors" },
            { id: "3", title: " Create fully integrated campaigns" },
            { id: "4", title: " Push Notification" },
            { id: "5", title: " Live Chat Request" },
            { id: "6", title: " Directly send or schedule posts" },
          ]}

        />

        <ChooseUs
          flex={'flex-row-reverse'}
          image1={choose2}
          mainimage={choosemain2}
          image2={choose4}
          badge={"Vision"}
          choosetitle={"Our Vision"}
          choosepara={'Our company’s aim is to be the acknowledged global leader in digital solutions, revolutionizing sectors and enabling businesses to prosper in the digital era. We see a day when cutting-edge technology and creative strategies revolutionize how organizations run, improve human experiences, and have a beneficial influence on society. We intend to influence the digital environment, open up new opportunities, and serve as the global catalyst for sustainable growth and digital transformation with a dedication to quality, integrity, and forward-thinking. Let’s work together to create a connected world where technology has no bounds and opportunities are endless.'}
          Choosedata={[
            { id: "1", title: "Send & Schedule Posts" },
            { id: "2", title: " Online Visitors" },
            { id: "3", title: " Create fully integrated campaigns" },
            { id: "4", title: " Push Notification" },
            { id: "5", title: " Live Chat Request" },
            { id: "6", title: " Directly send or schedule posts" },
          ]}

        />
      <Testimonial/>
      <Blog/>
   
      </div>
        </div>
        <Container>
        <div className='g1 w-[300px] h-[300px] xs:w-[390px] xs:h-[450px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] mt-[10%] xs:mt-[5%]   xs:ml-[5%] sm:mt-[5%]   sm:-ml-[6%] md:mt-[5%]   md:-ml-[5%] lg:mt-[5%]   lg:-ml-[5]  xl:mt-[5%]  xl:-ml-[5%] '></div>
        <div className='g2 w-[300px] h-[300px] xs:w-[390px] xs:h-[450px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] mt-[60%] xs:mt-[40%]  xs:ml-[5%] sm:mt-[20%]  sm:ml-[15%] md:mt-[18%]  md:ml-[20%] lg:mt-[15%]  lg:ml-[20%] xl:mt-[10%] xl:ml-[15%]  '></div>
        <div className='g3 w-[300px] h-[300px] xs:w-[390px] xs:h-[450px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] mt-[140%] xs:mt-[120%] xs:ml-[5%] sm:mt-[75%]  sm:ml-[35%] md:mt-[70%]  md:ml-[35%] lg:mt-[50%]  lg:ml-[45%] xl:mt-[35%] xl:ml-[35%]  '></div>
        <div className='g4 w-[300px] h-[300px] xs:w-[390px] xs:h-[450px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] mt-[200%] xs:mt-[180%] xs:ml-[5%] sm:mt-[115%] sm:ml-[5%]  md:mt-[100%] md:-ml-[5%] lg:mt-[80%]  lg:ml-[25%] xl:mt-[50%] xl:ml-[58%]  '></div>
        <div className='g1 w-[300px] h-[300px] xs:w-[390px] xs:h-[450px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] mt-[260%] xs:mt-[240%] xs:ml-[5%] sm:mt-[150%] sm:ml-[35%] md:mt-[130%] md:ml-[30%] lg:mt-[110%] lg:-ml-[5%] xl:mt-[70%] xl:ml-[35%]  '></div>
        <div className='g2 w-[300px] h-[300px] xs:w-[390px] xs:h-[450px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] mt-[310%] xs:mt-[280%] xs:ml-[5%] sm:mt-[170%] sm:-ml-[5%] md:mt-[150%] md:-ml-[5%] lg:mt-[120%] lg:ml-[20%] xl:mt-[90%] xl:ml-[15%]  '></div>
        <div className='g3 w-[300px] h-[300px] xs:w-[390px] xs:h-[450px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] mt-[390%] xs:mt-[350%] xs:ml-[5%] sm:mt-[210%] sm:ml-[35%] md:mt-[180%] md:ml-[30%] lg:mt-[150%] lg:ml-[45%] xl:mt-[110%] xl:ml-[35%]  '></div>
        <div className='g4 w-[300px] h-[300px] xs:w-[390px] xs:h-[450px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] mt-[470%] xs:mt-[360%] xs:ml-[5%] sm:mt-[250%] sm:-ml-[5%] md:mt-[210%] md:-ml-[5%] lg:mt-[170%] lg:ml-[25%] xl:mt-[130%] xl:ml-[58%]  '></div>
        <div className='g1 w-[300px] h-[300px] xs:w-[390px] xs:h-[450px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] mt-[520%] xs:mt-[350%] xs:ml-[5%] sm:mt-[290%] sm:ml-[35%] md:mt-[220%] md:ml-[30%] lg:mt-[180%] lg:-ml-[5%] xl:mt-[160%] xl:ml-[35%] xxl:hidden   '></div>
        
        <div className='g2 w-[300px] h-[300px] xs:w-[390px] xs:h-[450px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]  sm:hidden md:block md:mt-[150%] md:-ml-[5%] lg:mt-[220%] lg:ml-[20%] xl:mt-[190%] xl:ml-[15%] xxl:hidden  '></div>
        <div className='g3 w-[300px] h-[300px] xs:w-[390px] xs:h-[450px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]  sm:hidden md:block md:mt-[180%] md:ml-[30%] lg:mt-[260%] lg:ml-[45%] xl:hidden  '></div>
        <div className='g4 w-[300px] h-[300px] xs:w-[390px] xs:h-[450px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]  sm:hidden md:block md:mt-[210%] md:-ml-[5%] lg:mt-[300%] lg:ml-[25%] xl:hidden   '></div>
        
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

export default About