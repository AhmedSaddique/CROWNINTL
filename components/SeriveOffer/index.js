"use client"
import React, { useEffect, useState } from 'react'
import { HeadingH2, HeadingH3, HeadingH4, HeadingH5 } from '../Heading'
import { Para14, Para16 } from '../Paragraph'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import cross1 from '../../public/assets/images/cross1.png'
import Button from '../Button';
import { BiRightArrowAlt } from 'react-icons/bi';
import { Offerdata } from '../constants';
import Container from '../Container';

const Offer = () => {


        const [slidesPerView, setSlidesPerView] = useState(3); // Default value for larger screens
        const { theme } = useTheme();
      
        useEffect(() => {
          const handleResize = () => {
            if (window.innerWidth <= 640) {
              setSlidesPerView(1); // Adjust this value for your desired number of slides on mobile view
            } else if (window.innerWidth <= 768) {
              setSlidesPerView(2); // Adjust this value for your desired number of slides on larger screens
            } else {
              setSlidesPerView(4); // Default value for other screen widths
            }
          };
        
          window.addEventListener('resize', handleResize);
          handleResize(); // Initial call to set the initial value
        
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []);
        
  return (
 <Container>
  <div className='text-center '>
        <HeadingH2 title={"What We Offer"}/>
        <Para16 title={"What makes us different from others? We give holistic solutions"}/>
        <Para16 title={"with strategy, design & technology."}/>
    </div>  
    <div className='pt-10'>
        <Swiper
          spaceBetween={20}
          slidesPerView={slidesPerView}
          pagination={{ clickable: true }}
          loop={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
            {
                Offerdata.map((array, index)=>(
                <SwiperSlide className='m-0 md:m-3 mb-10 w-full'>
              <div className={`border  duration-300 transition rounded-md md:hover:scale-105`}>
                <div className='bg-primary-gray200 flex pt-8 rounded-t-md pb-8 p-3 gap-3'>
                <div className='bg-primary-white rounded-md p-3 min-w-[104px] max-w-[104px]  '>
                <Image className='w-6/6 h-[80px]' src={array.image}/>
                </div>
                <HeadingH4 className={"text-white"} title={array.heading}/>
                </div>
                <div className='p-3 space-y-4'>
                <Para14 title={array.text}/>

                <Button className={'border-none flex-row-reverse'} text={"Learn More"} btnicon={<BiRightArrowAlt className='mt-1' size={20}/>}/>
                </div>
                
              </div>
            </SwiperSlide>
                ))
            }
            
            
           
       
        </Swiper>
      </div>
 </Container>

  )
}

export default Offer;