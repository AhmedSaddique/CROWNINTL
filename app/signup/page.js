import LayoutProvider from '@/components/LayoutProvider'
import SignUp from '@/components/SignUpForm'
import React from 'react'

const signup = () => {
  return (
    <LayoutProvider>
<div className={` relative `}>
    <div className={'relative z-10 backdrop-blur-md'}>
        <SignUp/>
        </div>
        </div>
        <div className='flex flex-wrap'>
        <div className='g3 w-[300px] h-[300px] xs:w-[390px] xs:h-[450px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] mt-[10%] xs:mt-[5%]   xs:ml-[5%] sm:mt-[5%]   sm:-ml-[6%] md:mt-[5%]   md:-ml-[5%] lg:mt-[5%]   lg:-ml-[5]  xl:mt-[5%]  xl:-ml-[5%] xxl:hidden'></div>
        <div className='g2 w-[300px] h-[300px] xs:w-[390px] xs:h-[450px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] mt-[30%] xs:mt-[40%]  xs:ml-[5%] sm:mt-[20%]  sm:ml-[15%] md:mt-[18%]  md:ml-[20%] lg:mt-[15%]  lg:ml-[20%] xl:mt-[10%] xl:ml-[15%]  xxl:hidden'></div>
        <div className='g1 w-[300px] h-[300px] xs:w-[390px] xs:h-[450px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] mt-[140%] xs:mt-[120%] xs:ml-[5%] sm:mt-[75%]  sm:ml-[35%] md:mt-[70%]  md:ml-[35%] lg:mt-[50%]  lg:ml-[45%] xl:mt-[35%] xl:ml-[35%]  xxl:hidden'></div>

      </div>
    </LayoutProvider>
    
  )
}

export default signup