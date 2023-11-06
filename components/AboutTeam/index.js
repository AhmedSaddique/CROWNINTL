import React from 'react';
import { HeadingH2, HeadingH4, HeadingH6 } from '../Heading';
import Image from 'next/image';
import { Para12, Para14, Para16, Para18 } from '../Paragraph';
import Iconitem from '../Icon/icon';
import { AboutTeam } from '../constants';
import Container from '../Container';
import { useTheme } from 'next-themes';

const Team = () => {
  const { theme, settheme } = useTheme();

  return (
    <Container>
 <div className='relative pb-10 '>
 <HeadingH6 title={"Our leadership team"} />
      <HeadingH2 title={"Meet the amazing team"} />

  </div> 
  
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

  {AboutTeam.map((array, index) => (
  <div className="max-w-sm rounded overflow-hidden  shadow-lg relative">
    {/* Image */}
    <div className="relative group h-auto ">
      <Image
        className="w-full h-[380px]"
        src={array.image}
        alt="Image Alt Text"
      />
      <div className="absolute top-0 left-0 w-full h-[full]  flex flex-col  opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-2xl">
        <div className="px-6 py-4  text-center flex flex-col justify-between  h-[380px] duration-300 bg-opacity-20 ">
        <div className='text-white'>
          <HeadingH4 className="" title={array.name} />
          <HeadingH6 className="text-primary-blue100" title={array.title}/>
          <Para12 className="text-center pt-3" title={array.para}/>
        </div>
         
          <div className="flex flex-col justify-end items-center">
            <Iconitem className={' '}/>
          </div>
        </div>
        
      </div>
    </div>
  </div>
    ))}

    
  {/* {AboutTeam.map((array, index) => (
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
          <Para12 className="text-center pt-3" title={array.para}/>

          <div className="flex justify-center pt-8 pb-10">
            <Iconitem className="absolute bottom-[20px] " />
          </div>
        </div>
      </div>
    </div>
  ))} */}
</div>

    </Container>
  );
};

export default Team;
