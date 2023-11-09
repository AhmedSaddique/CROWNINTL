import Image from 'next/image';
import React from 'react';
import fa1 from '../../public/assets/images/fa1.png'



const FaqImg = ({ image, content }) => {


  return (
    <>
    <Image src={fa1} alt='faq'/>
    </>
  );
};

export default FaqImg;
