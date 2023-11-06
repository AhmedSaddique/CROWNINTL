'use client'
import React from 'react'
import { HeadingH2, HeadingH4, HeadingH6 } from '../Heading'
import Iconitem from '../Icon/icon'
import { AboutTeam, DevTeam } from '../constants'
import { useTheme } from 'next-themes'
import { Para12 } from '../Paragraph'
import Container from '../Container'
import Image from 'next/image'

const DeveloperTeam = () => {
  const { theme, settheme } = useTheme();

  return (
    <>
      <Container>
 <div className='relative pb-10 '>
 <HeadingH6 title={"Our Developer Team"} />
      <HeadingH2 title={"Meet The Amazing Team"} />

  </div> 
  
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  {DevTeam.map((array, index) => (
    <div className="relative mt-20">
      <div className={`rounded overflow-hidden shadow-md h-full max-h-full ${
        theme === 'dark' ? 'bg-primary-white text-primary-black' : 'bg-primary-blue100 text-primary-white '
      }`}>
        <div className="absolute -mt-20 w-full flex justify-center">
          <div className="h-32 w-32 border-8 border-white rounded-full">
            <Image src={array.image} role="img" className="rounded-full object-cover h-full w-full shadow-md" />
          </div>
        </div>
        <div className="px-2 mt-16 text-center">
          <HeadingH4 className="" title={array.name} />
          <HeadingH6 className="" title={array.title}/>
          <div className="flex justify-center pt-3 pb-5">
            <Iconitem />
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

    </Container>
    </>
    
  )
}

export default DeveloperTeam