"use client"
import React from 'react'
import { Para16, Para18 } from '../Paragraph'
import { HeadingH1 } from '../Heading'
import { useTheme } from 'next-themes'

const Hero = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={`${
      theme === 'dark' ? 'text-primary-black' : 'text-primary-white'
    }  pt-10  w-full `}>
    <div className='xl:p-18 lg:p-10 md:p-2 sm:p-2 p-3 space-y-4 text-center'>
        <Para18 className={'font-bold text-justify'} title={"________ Get in Touch"}/>
        <div className='-space-y-3'>
        <HeadingH1 title={"We’d love to hear "}/>
        <HeadingH1 title={" from you."}/>
        </div>
        <Para16 title={"“Crown International Technology: Redefining the Digital Frontier Unlocking Digital Potential, Empowering Global Progress.”"}/>
    </div>
  
    </div>
  )
}

export default Hero