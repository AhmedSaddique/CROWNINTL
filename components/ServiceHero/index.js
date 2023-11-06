import React from 'react'
import banner1 from '../../public/assets/images/banner1.png'
import Image from 'next/image'
import { HeadingH1 } from '../Heading'
import { Para16 } from '../Paragraph'

const Hero = () => {
  return (
    <div >
    <div className='bg-primary-gray400'>
      <div className='flex-wrap md:flex '>
        <div className='w-12/12 md:w-6/12 text-white'>
        <div className='p-4 lg:p-16 md:p-5'>
        <div className=' -space-y-3'>
        <HeadingH1 title={"Advanced"}/>
        <HeadingH1 title={"analytics to grow"}/>
        <HeadingH1 title={"your business"}/>
        </div>
        <Para16 className={"pt-5"} title={"Collaborate, plan projects and manage resources with powerful features that your whole team can use. The latest news, tips and advice to help you run your business with less fuss."}/>
        </div>
        </div>
        <div className='w-12/12 md:w-6/12 hidden md:block'>
        <Image className='h-auto' src={banner1} alt='banner1'/>
        </div>
        
      </div>
    </div>
    </div>
  )
}

export default Hero