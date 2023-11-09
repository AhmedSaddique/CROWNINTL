import React from 'react';
import { HeadingH2, HeadingH3, HeadingH5, HeadingH6 } from '../Heading';
import { Para14, Para16 } from '../Paragraph';
import Image from 'next/image';
import arrowDown from '../../public/assets/images/arrowDown.png';
import { TiTick } from 'react-icons/ti';
import { Aboutcore } from '../constants';
import Container from '../Container';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import Button from '../Button';


const AboutCore = () => {
  const { theme, setTheme } = useTheme();

  return (
<>
    
    <Container>
      <div className='bg-aboutfinger bg-no-repeat pt-10  bg-left-bottom '>
        <div className='w-full flex gap-4'>
          <Image src={arrowDown} alt='Arrow' className='h-20 animate-bounce delay-1000' />
          <div className='space-y-4 pb-10'>
            <HeadingH2 title='Technologies We Use' />
            <HeadingH2 className={"text-primary-blue100"} title=' Mostly' />


          </div>
        </div>

        <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-5 '>
          {Aboutcore && Aboutcore.service.map((array, index) => (
            <Link key={index} href="/" className={`shadow-lg group mb-8 rounded-lg max-h-full h-auto flex justify-center items-center relative ${theme === 'dark' ? ' bg-primary-white ' : ' bg-primary-blue100 hover:bg-primary-blue200'}`}>
              <div>
                <div className="p-4 rounded-lg group-hover:opacity-25">
                  <Image className='rounded-full' src={array.image} alt={array.image} />
                  <HeadingH5 className={'pl-2'} title={array.title} />
                  <Para16 className={'pl-2'} title={array.para} />
                </div>
              </div>
              
              <div className={`absolute opacity-0 w-full h-auto mt-10 mb-10 flex flex-col p-5 rounded-lg  group-hover:opacity-100 ${theme === 'dark' ? ' bg-primary-white ' : ' bg-primary-blue100 hover:bg-primary-blue200'}`}>
                {array.item.map((items, index) => (
                  <div className='flex flex-col gap-3' key={index}>
                    <div className='flex'>
                      <TiTick size={22} className={`${theme === 'dark' ? ' text-primary-black ' : ' text-primary-white'}`} />
                      <Para16 title={items.role} />
                    </div>
                  </div>
                ))}
                <Link className={`mt-3`} href={`${array.ref}`}>
                  <Button className={'bg-primary-blue100 hover:bg-primary-blue200 text-primary-white h-10'} text={"View More"} />
                </Link>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </Container>
      
      </>
  );
};

export default AboutCore;
