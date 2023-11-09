"use client"
import React, { useState } from 'react';
import Button from '../Button';
import Container from '../Container';
import { HeadingH1, HeadingH6 } from '../Heading';
import { Para16 } from '../Paragraph';
import { useTheme } from 'next-themes';
import { Faqdata } from '../constants';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import FaqImg from '../FaqImg';
import FaqImg2 from '../FaqImg/index2';
import fa1 from '../../public/assets/images/fa1.png'
import fa2 from '../../public/assets/images/fa2.png'
import { FcFaq } from 'react-icons/fc';


const Faq = () => {
  const { theme, setTheme } = useTheme();

  const Faqdata = 
    [
      {
        id: "1",
        title: "General Support",
        descrip:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective “outside the box” thinking.",
          image:fa1,
          content: <FaqImg/> 
      },
      {
        id: "2",
        title: "Download / Install",
        descrip:
          "Discover powerful features to boost your productivit. You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.",
          image:fa2,
          content: <FaqImg2/> 
      },
      {
        id: "3",
        title: "Technology",
        descrip:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective “outside the box” thinking.",
          image:fa1,
          content: <FaqImg/> 
      },
      {
        id: "4",
        title: "Your Account",
        descrip:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective “outside the box” thinking.",
          image:fa2,
          content: <FaqImg2/> 
      },
    ];
    

    const [openAccordionIndex, setOpenAccordionIndex] = useState(0);
    const [activeTab, setActiveTab] = useState(0);
    
    const handleTabClick = (index) => {
      setActiveTab(index);
    };
    
    const toggleAccordion = (index) => {
      if (openAccordionIndex === index) {
        setOpenAccordionIndex(null);
      } else {
        setOpenAccordionIndex(index);
      }
    };
    
    const handleCombinedClick = (index) => {
      toggleAccordion(index);
      handleTabClick(index);
    };
  return (
    <>
    <div className="bg-faq bg-no-repeat bg-right-top ">
      <Container>
      <div className="pt-32 ">
        <HeadingH1 title={'Frequently asked questions'}/>
        </div>
        <div className="flex  justify-between items-center flex-wrap">
          <Para16 className={''} title={'Feeling inquisitive? Have a read through some of our FAQs or contact our supporters for help'}/>
          <Button text={'Learn More'} className={'bg-primary-white text-primary-black'} />
        </div>
        <div className="flex pt-10 md:gap-0 lg:gap-4 flex-wrap sm:flex-nowrap">
        <div className="w-full sm:w-5/12">
          {Faqdata.map((array, index) => (
        <div
          className={`rounded-md ${
            openAccordionIndex === index ? 'bg-primary-blue300' : ''
          } mt-5 mb-5 transition duration-500 text-black`}
          key={index}
        >
          
          <button
           onClick={() => handleCombinedClick(index)}
            
            className={`${
              activeTab === index ? 'active  ' : ''
            } w-full text-left p-3 rounded-md flex justify-between items-center ${
              openAccordionIndex === index ? 'text-white' : `${theme === 'dark' ? ' text-black ' : ' text-primary-white'}`
            }`}
          >
            <span className={`font-medium flex relative ${openAccordionIndex === index ? 'text-white' : ''}`}>
            <FcFaq className='relative bottom-0 md:bottom-8 right-0 md:right-8 ' size={70}/> 
            <HeadingH6 className={'relative right-0 md:right-6'} title={array.title}/>
            </span>
            <span>
              {openAccordionIndex === index ? (
                <MdOutlineKeyboardArrowUp size={25} className='text-primary-gray100' />
              ) : (
                <MdOutlineKeyboardArrowDown size={25} className='text-primary-gray300' />
              )}
            </span>
          </button>
          {openAccordionIndex === index && (
            <div className="p-3">
              <p className='text-primary-white'>{array.descrip}</p>
            </div>
          )}
        </div>
      ))}
          </div>
          <div className="w-full sm:w-7/12">
          {Faqdata[activeTab].content}

          </div>
          
        </div>
      </Container>
        
      </div>
    
    </>
  );
};

export default Faq;
