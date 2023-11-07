import React, { useState, useRef } from 'react';
import { ImCross } from 'react-icons/im';
import { useTheme } from 'next-themes';
import { HeadingH4, HeadingH5, HeadingH6 } from '../Heading';
import MegaData from '../MegaData';


const MegaMenu = ({ array,className, text, icon, onLinkClick, textSize = 'font-semibold mt-0', alignment = 'left-0' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleBothClicks = () => {
    setIsOpen(!isOpen);
    onLinkClick();
  };
  const closeDropdown = () => {
    setIsOpen(false);
  };

  const openDropdown = () => {
    setIsOpen(true);
  };

  const { theme } = useTheme();
  const dropdata = [
    { id: '1', title: 'Services', content: <MegaData/> },
    { id: '2', title: 'Download / Install', content: <MegaData/> },
    { id: '3', title: 'Technology', content: <MegaData/> },
    { id: '4', title: 'Your Account', content: <MegaData/> },
  ];

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  console.log(activeTab.content)

  return (
    <div className={`inline-block  ${textSize}`}>
      <button
        onClick={toggleMenu}
        className={`inline-flex  font-semibold  ${text && text} ${icon && icon}`}
      >
        {text && text}
        {icon && icon}
      </button>
      {isOpen && (
        <div
          className={`absolute top-0 ${alignment}  z-20   shadow-lg ${theme === 'dark' ? 'bg-primary-white text-black' : 'bg-primary-blue500'
            }`}
  
          ref={dropdownRef}

        >
          <div onClick={toggleMenu}  className='border-2 hover:scale-105 hover:border-primary-blue100 duration-300 transition rounded-md flex p-2 items-center justify-center w-10'>
            <ImCross />
          </div>
          <div className='flex gap-3 h-screen' >
          <div className={` ${className}  p-2 pt-5 w-full md:w-3/12 `}>
            {
              dropdata.map((array , index)=>(
                <div key={index}
                onClick={() => handleTabClick(index)}
                className={`${
                    activeTab === index ? 'active  bg-primary-blue300 text-primary-white' : ''
                  } p-2 rounded-md mt-2 mb-2 hover:bg-primary-blue200 hover:text-primary-white transition duration-300`}>
                <HeadingH6 title={array.title}/>
              </div> 
              ))
            }
           
          </div>
          <div onClick={handleBothClicks}  className={`${className} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-9/12`}>
            {dropdata[activeTab].content}
          </div>
       
          </div>
          
        
        </div>
      )}
    </div>
  );
};

export default MegaMenu;
