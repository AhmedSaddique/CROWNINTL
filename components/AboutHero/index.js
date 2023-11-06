import React from 'react'
import { HeadingH1, HeadingH2, HeadingH6 } from '../Heading'
import { Para16, Para18 } from '../Paragraph'
import Image from 'next/image'
import { Aboutchallenge } from '../constants'
import Container from '../Container'
import Counter from '../Counter'
import { useTheme } from 'next-themes'

const Hero = () => {
  const { theme, settheme } = useTheme();

  return (
    <>
    <div className={`pt-10 bg-aboutfinger bg-right-top bg-no-repeat ${
        theme === 'dark' ? ' text-primary-black' : ' text-primary-white '
      }`}>
    <div className='md:w-8/12 mx-auto text-center my-10 '>
    <HeadingH6 title={"Who we are"}/>
    <HeadingH2  title={"Crown International Technology: Redefining the Digital Frontier Unlocking Digital Potential, Empowering Global Progress."}/>
    <Para16 title={"Social media networks are open to all. Social media is typically used for social interation and access to news and information, and decison making."}/>
    </div>
    <Container>
    <div className=' shadow-2xl rounded-lg'>
    <div className='grid grid-cols-1  xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-3 '>
    {
    Aboutchallenge.map((array , index)=>(
    <div className='mt-5 mb-5 hover:scale-105 duration-300 transition' key={index}>
    <div className='w-3/12 h-14 mx-auto rounded-md bg-primary-gray200 p-3'>
    <Image className='mx-auto   ' src={array.image}/>
    </div>
    <HeadingH1 className={"text-center"} title={<Counter start={array.start} end={array.end} duration={array.duration}/>}/>
    <Para18 className={"text-center"} title={array.link}/>
    </div>
        ))
    }
    </div>
    </div>
    </Container>
    </div>
    </>
  )
}

export default Hero