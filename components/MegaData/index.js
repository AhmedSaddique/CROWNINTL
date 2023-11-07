import Link from 'next/link'
import React, { useState} from 'react';
import { HeadingH4, HeadingH5, HeadingH6 } from '../Heading'
import { Para12, Para14 } from '../Paragraph'
import { Aboutcore } from '../constants';
import Image from 'next/image';

const MegaData = ({onLinkClick}) => {

      const [isOpen, setIsOpen] = useState(false);

      const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
    
      const closeDropdown = () => {
        setIsOpen(false);
      };
    
      const openDropdown = () => {
        setIsOpen(true);
      };
  
 
  return (
    <>
    {
    Aboutcore.Category.map((data, index) => (
      <>
      <div className='flex items-center p-3  '>
      <HeadingH4 key={index} className=" " title={data.cat ||"categ" } />
      </div>
      </>
      ))}
      {
        Aboutcore.service.map((array ,index)=>(
          <div key={index} className=' '>
          <Link className='' href={`${array.ref}`} >
            <div className="flex flex-col sm:flex-row border md:border-none mt-2 md:mt-0 mb-5 md:mb-0   duration-300 transition gap-3  rounded-md hover:bg-primary-blue100 hover:text-white px-2 py-2">
              <Image className='w-[30px] h-[30px] rounded-full' src={array.image} alt={array.image} />
              <div>
              <HeadingH6 title={array.title}/>
              <Para12 title={array.para}/>
              </div>
            </div>
          </Link>
      </div>
        ))
      }
   
        
   
    </>
  )
}

export default MegaData