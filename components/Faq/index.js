"use client"
import React, { useState } from 'react';
import Button from '../Button';
import Accordion from '../Accordion';
import Container from '../Container';
import { BiRightArrowAlt } from 'react-icons/bi';
import { HeadingH1 } from '../Heading';
import { Para16 } from '../Paragraph';
import { useTheme } from 'next-themes';

const Faq = () => {
  const { theme, setTheme } = useTheme();

  const FaqTapdata = [
    { id: '1', title: 'General Support', content: <Accordion/> },
    { id: '2', title: 'Download / Install', content: <Accordion/> },
    { id: '3', title: 'Technology', content: <Accordion/> },
    { id: '4', title: 'Your Account', content: <Accordion/> },
  ];

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
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
        <div className="sm:flex pt-10 md:gap-0 lg:gap-4 flex-wrap">
          <div className="w-full sm:w-3/12">
            {FaqTapdata.map((array, index) => (
              <div
                key={index}
                onClick={() => handleTabClick(index)}
                className={`${
                  activeTab === index ? 'active bg-primary-blue300 text-primary-white' : ''
                } flex justify-between cursor-pointer border p-3 mt-5 mb-5 font-medium rounded-md ${theme === 'dark' ? ' text-black hover:text-primary-white' : 'bg-primary-blue300 text-primary-white'} focus:bg-primary-blue300 hover:bg-primary-blue200`}
              >
                {array.title}
                <BiRightArrowAlt size={25} />
              </div>
            ))}
            <div className="flex flex-wrap gap-4">
              <Button
                text="Contact Us"
                className="bg-primary-blue200 text-primary-white hover:border-blue200 hover:bg-primary-blue300 border-none"
              />
              <Button text="Support Center" className="bg-primary-white text-primary-black" />
            </div>
          </div>
          <div className="w-full sm:w-8/12">
          {FaqTapdata[activeTab].content}
          </div>
        </div>
      </Container>
        
      </div>
    
    </>
  );
};

export default Faq;
