import Image from 'next/image'
import React from 'react'
import choosemain from '../../public/assets/images/choosemain.png'
import choose1 from '../../public/assets/images/choose1.png'
import choose3 from '../../public/assets/images/choose3.png'



const ChooseImage = () => {
  return (

    <>
    
    <div className='relative'>
    <Image className='absolute top-0 right-0 hidden sm:flex  animate-bounce' src={choose1} alt='choose1'/>
    <Image className='rounded-full' src={choosemain} alt='choosemain'/>
    <Image className='absolute bottom-0 hidden sm:flex  animate-bounce ' src={choose3} alt='choose3'/>
    </div>

    </>
  )
}

export default ChooseImage