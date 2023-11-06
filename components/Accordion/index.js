import React, { useState } from 'react';
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Faqdata } from '../constants';
import { useTheme } from 'next-themes';

const Accordion = ({ title, content }) => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (openAccordionIndex === index) {
      // If the clicked accordion is already open, close it
      setOpenAccordionIndex(null);
    } else {
      // If the clicked accordion is closed, open it and close the previously open one
      setOpenAccordionIndex(index);
    }
  };
  const { theme, setTheme } = useTheme();


  return (
    <>
      {Faqdata.map((array, index) => (
        <div
          className={`rounded-md ${
            openAccordionIndex === index ? 'bg-primary-blue300' : ''
          } mt-5 mb-5 transition duration-500 text-black`}
          key={index}
        >
          <button
            onClick={() => toggleAccordion(index)}
            className={`w-full text-left p-3 rounded-md flex justify-between items-center ${
              openAccordionIndex === index ? 'text-white' : `${theme === 'dark' ? ' text-black ' : ' text-primary-white'}`
            }`}
          >
            <span className={`font-medium ${openAccordionIndex === index ? 'text-white' : ''}`}>
              {array.title}
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
    </>
  );
};

export default Accordion;
