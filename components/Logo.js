import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import logo from '../public/assets/images/logo.png'
import { HeadingH1 } from './Heading';
const Logo = ({ className }) => {
  


  return (
    <Link  href="/">
      <HeadingH1 title={'LOGO'}/>
      {/* <Image className='w-[100px] sm:w-[150px]' src={logo} /> */}
    </Link>
  );
};

export default Logo;