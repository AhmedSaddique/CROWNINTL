import React, { useState, useRef } from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { HeadingH4, HeadingH5 } from '../Heading';


const DropDown = ({ array, text, icon, onLinkClick, textSize = 'font-semibold mt-0', alignment = 'left-0' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const openDropdown = () => {
    setIsOpen(true);
  };

  const { theme } = useTheme();


  return (
    <div className={`inline-block  ${textSize}`} >
      <button
        onClick={toggleMenu}
        className={`inline-flex  font-semibold  ${text && text} ${icon && icon}`}
      >
        {text && text}
        {icon && icon}
      </button>
      {isOpen && (
        <div 
          className={`fixed ${alignment} z-20 rounded-md shadow  ${theme === 'dark' ? 'bg-primary-white text-black ' : 'bg-primary-blue400 '
            }`}

          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
          ref={dropdownRef}

        >
          {array ? (
            array.map((array, index) => (
              <div key={index}>
                <HeadingH5 className="mb-3" title={array.Category} />
                {array.items.map((items, index) => (
                  <div onClick={onLinkClick}>
                    <Link className='' href={items.href} onClick={() => setIsOpen(!isOpen)} key={index}>
                      <div className="flex gap-3 md:gap-5 justify-between items-center rounded-md hover:bg-primary-blue100 hover:text-white px-2 py-2">
                        {items.title}
                        <div className='bg-primary-btn3 text-[10px] text-white py-1 px-2 rounded-full'>
                         {items.subtitle}
                        </div>
                      </div>
                    </Link>
                    
                  </div>
                ))}
              </div>
            ))
          ) : (
            <form  className="relative border-none ">
              <div>
                <div className="absolute inset-y-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-main"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 bg-primary-white text-black text-sm border-2 focus:outline-none rounded"
                  placeholder="Search"
                  required
                />
                <button
                  type="submit"
                  className="text-light absolute right-2.5 bottom-2.5 bg-primary-blue100 text-white hover:bg-primary-gray400 transition duration-300 font-medium rounded text-sm px-4 py-2"
                >
                  Search
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default DropDown;
