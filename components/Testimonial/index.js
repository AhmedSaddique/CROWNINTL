"use client"
import React from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Testimonialdata } from '../constants';
import { useTheme } from 'next-themes';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Para16 } from '../Paragraph';
import { HeadingH2, HeadingH5 } from '../Heading';
import Button from '../Button';
import Container from '../Container';

const Testimonial = () => {
  

  const [slidesPerView, setSlidesPerView] = useState(3); // Default value for larger screens
  const { theme } = useTheme();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setSlidesPerView(1); // Adjust this value for your desired number of slides on mobile view
      } else if (window.innerWidth <= 768) {
        setSlidesPerView(2); // Adjust this value for your desired number of slides on larger screens
      } else {
        setSlidesPerView(3); // Default value for other screen widths
      }
    };
  
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call to set the initial value
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  return (
    <Container className={"pt-10"}>
      <div className={` space-y-5 bg-plant bg-no-repeat bg-left-bottom`}>
      <HeadingH2 className={''} title={"What our customers are saying"} />
      <div className='flex justify-between flex-wrap '>
        <Para16 title={`Hear from our users who have saved thousands on their Startup and SaaS solution spend`} />
        <Button text="View more" />
      </div>

      <div>
        <Swiper
      
          spaceBetween={20}
          slidesPerView={slidesPerView}
          pagination={{ clickable: true }}
          loop={true}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {Testimonialdata.map((array, index) => (
            <SwiperSlide className='m-0 md:m-3 mb-10 w-full' key={index}>
              <div className={`border-none p-3 shadow duration-300 transition rounded-md  ${theme === 'dark' ? 'backdrop-blur-3xl' : 'bg-primary-blue100 text-primary-white'}`}>
                <div className=' bg-quote bg-no-repeat bg-right-top space-y-5 '>
                  <div className='flex gap-4'>
                    <div className='w-2/12 h-2/12'>
                      <Image className='rounded-full ' src={array.image} alt={array.image} />
                    </div>
                    <div>
                      <HeadingH5 className={"text-primary-gray300"} title={array.name} />
                      <Para16 className="text-primary-gray200" title={array.title} />
                    </div>
                  </div>
                  <Para16 title={array.para} />
                  <hr />
                  <Para16 title={array.date} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </Container>
  );
};

export default Testimonial;
