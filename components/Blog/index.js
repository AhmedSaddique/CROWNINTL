"use client"
import React from 'react'
import { HeadingH2, HeadingH3, HeadingH4 } from '../Heading'
import { Para14, Para16 } from '../Paragraph'
import Button from '../Button'
import Image from 'next/image'
import { MdDateRange } from 'react-icons/md'
import { Blogdata, Testimonialdata } from '../constants'
import { useTheme } from 'next-themes'
import Container from '../Container'

const Blog = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
    <Container className={'pt-10'}>
    <div className={`space-y-5`}>
    <HeadingH2 className={""} title={"From our blog"} />
    <div className='flex  justify-between flex-wrap'>
    <Para16 title={`Hear from our users who have saved thousands on their Startup and SaaS solution spend`} />
    <Button className={'bg-primary-white text-primary-black'} text="View more" />
    </div>
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
      {
        Blogdata.map((array , index)=>(
          <div className='relative' key={index}>
          <div className='flex justify-center relative top-10 z-10'>
          <div className={`w-9/12 flex justify-center p-3 rounded-lg bg-primary-black shadow-xl ${
                        theme === 'dark' ? 'bg-primary-white ' : 'bg-primary-blue100 '
                      }`}>
            <Image className=' hover:scale-105 duration-500 transition rounded-md object-cover' src={array.image} alt={array.image} />
            </div>
          </div>
            <div className={`p-4 relative  shadow-2xl space-y-3 rounded-lg pt-10 ${
                        theme === 'dark' ? 'bg-primary-white text-primary-black' : 'bg-primary-blue100 text-primary-white'
                      }`}>
            <HeadingH4 title={array.title}/>
            <Para14 className={"flex "} icon={<MdDateRange size={20}/>} title={array.date}/>
            <Para14 className={""} title={array.para}/>
            <Button className='border-none px-4 py-2 bg-gradient-to-r from-primary-btn1 hover:from-primary-btn3 via-primary-btn2 to-primary-btn3 hover:to-primary-btn1 text-primary-white transition duration-400 shadow-md' text={'Read More'}/>
            </div>
            
        </div>
        ))
      }
    
    </div>
    </div>
    </Container>


    </>
  )
}

export default Blog