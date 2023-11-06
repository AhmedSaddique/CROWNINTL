"use client"
import React, { useState } from 'react';
import Logo from '../Logo';
import Container from '../Container';
import Navlink from '../Navlink';
import { IoIosArrowUp } from 'react-icons/io';
import { TbMenu2 } from 'react-icons/tb';
import { AiOutlineSearch } from 'react-icons/ai';
import {HiOutlineBars3BottomRight} from 'react-icons/hi2';
import DropDown from '../dropdown';
import ThemeToggle from '../toggletheme';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { Drawer, Tabs } from 'antd';
import Button from '../Button';
import TabsComponent from '../tabsComponent';
import { ImCross } from 'react-icons/im';

const Header = ({ className }) => {
  const [navbar, setNavbar] = useState(true);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('left');

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  

  const onChangeTab = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: '1',
      label: 'All',
      children: <TabsComponent />,
    },
    {
      key: '2',
      label: 'Apps',
      children: <TabsComponent />,
    },
    {
      key: '3',
      label: 'Compute',
      children: <TabsComponent />,
    },
  ];

  const handleCloseDrawer = () => {
    onClose(); // Call the onClose function provided as a prop
  };
  return (
    <>
    {
    navbar ? (
     <nav
      className={`${theme === 'dark' ? 'bg-primary-light text-primary-black' : 'bg-primary-blue500 text-primary-white'
        }   relative z-20 shadow-xl drop-shadow `}
        >
      <Container className="flex justify-end ">
        
        <div className='flex items-center gap-4 p-2'>
            <Link className='font-medium' href="/login">
              Free Trial
            </Link>
            <Link className='font-medium' href="/login">
              Login
            </Link>
        </div>
      </Container>
      <div className={`${theme === 'dark' ? 'border-b-primary-black' : 'border-b-primary-white'
        }  border-b-2 w-[95%] mx-auto`} />
      <Container className="flex justify-between py-4 pt-2 pb-2 ">
        <div className="relative z-10">
          <Logo />
        </div>
        <div className="lg:flex  lg:gap-10 items-center hidden ">
          <Navlink onClose={() => setMobileMenuOpen(false)} />
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <DropDown onlick={() => setNavbar(false)}  alignment='w-full  right-0' text={<AiOutlineSearch className="text-2xl mt-[5px] " />} />
            
            <Button className={'border-none'} onClick={showDrawer} btnicon={<HiOutlineBars3BottomRight size={25} />} text='' />
            <Drawer
              width={700}
              placement={placement}
              closable={false}
              open={open}
              onClose={onClose}
              key={placement}
              style={{ background: "transparent", boxShadow: "0px !important", overflow: "scroll" }}
              >
              <div className={`rounded-lg shadow-xl p-3 ${theme === 'dark' ? '  backdrop-blur-2xl' : ' backdrop-blur-2xl '
        }`}>
              <div className={`flex  justify-center border-2 hover:scale-105  shadow-md text-primary-white hover:shadow-lg duration-100 transition rounded-md p-2 w-10`} onClick={handleCloseDrawer}>
                  <ImCross />
                </div>
                <div>
                <Tabs className='drawerTab mt-5' defaultActiveKey="1" items={items} onChange={onChangeTab} />

                </div>
              </div>
            </Drawer>
          </div>
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center bg-primary-blue200 text-primary-white  rounded-lg p-2 hover:bg-primary-blue200 transition duration-300"
              >
              {mobileMenuOpen ? (
                <IoIosArrowUp className="text-2xl mt-[5px]" />
                ) : (
                  <TbMenu2 className="text-2xl mt-[5px]" />
                  )}
            </button>
            {mobileMenuOpen && (
              <div className={`absolute -z-10 inset-x-0  h-screen   origin-top rounded-b-2xl px-6 pb-6 pt-10 ${theme === 'dark' ? 'bg-primary-white text-primary-black' : 'bg-primary-blue500'
            }`}>
                <div className="space-y-4  flex-col flex z-50">
                  <Navlink onClose={() => setMobileMenuOpen(false)} />

                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </nav>
     ) :
    (
    <div className='z-30 absolute'>
    <h1 className={'text-white'} >sadasds</h1>
    </div>
     )
    } 
    
    
    </>
  );
};

export default Header;
