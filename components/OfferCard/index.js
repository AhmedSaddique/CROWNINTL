import React, { useEffect } from 'react';
import Button from '../Button';
import { Offerdata } from '../constants'
import Image from 'next/image';
import { HeadingH1, HeadingH3, HeadingH4 } from '../Heading';
import { Para16, Para18 } from '../Paragraph';


const OfferCard = () => {


  return (
    <>
      <div className='grid  grid-cols-1  lg:grid-cols-3 gap-10 pt-10 mx-auto '>
      {  Offerdata.map((array , index)=>(
        <div className='  shadow-xl rounded-lg p-3 border-4'>
        <div class="cursor-pointer" >
          <Image className='rounded-t-lg h-[300px] ' src={array.image}/>
          <div class="h-auto   bg-primary-blue300 hover:bg-primary-blue400 space-y-4 p-3 sticky bottom-0 text-white bg-opacity-95 shadow-md rounded-b-md ">
            <HeadingH4 class="text-xl font-bold pb-2" title={array.heading} />
            <Para16 class="truncate text-sm" title={array.text}/>
            <Button className={'bg-primary-blue200 border-none text-white hover:bg-primary-blue300'} text={"Read More"}/>
          </div>
        </div>
      </div>
     ))
    }

      

        {/* {  Offerdata.map((array , index)=>(
      <div className='relative '>
        <div>
        <Image  className='rounded-lg' src={array.image}/>
        </div>
        <div className={`${
        theme === 'dark' ? 'bg-primary-black text-primary-white' : 'bg-primary-white text-primary-black'
      } relative  -top-20 mr-5 ml-5 rounded-lg p-2 space-y-4  shadow-2xl`}>
        <HeadingH4 title={array.heading}/>
        <Para16 title={array.text}/>
        <Button text={"Learn more"} className={""}/>
      </div>
      </div>
      
      ))
    } */}

      </div>

    </>
  )
}

export default OfferCard