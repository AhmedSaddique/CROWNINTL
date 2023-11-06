import React from 'react'
import Button from '../Button'
import OfferCard from '../OfferCard'
import { HeadingH1 } from '../Heading'
import Container from '../Container'
import { Para16 } from '../Paragraph'
import { useTheme } from 'next-themes'


const WeOffer = () => {
  const { theme, settheme } = useTheme();
 
  return (
    <>
    <div className='relative'>

    <div className={`${theme === 'dark' ? 'bg-g-white ' :
   'bg-g-blue'}`}>

    <Container className={'relative z-10 backdrop-blur-3xl '}>
      <div className='flex flex-wrap justify-between pt-5'>
      <div>
    <HeadingH1 title="What We Offer"/>
    <Para16 title={"What makes us different from others? We give holistic solutions with strategy, design & technology."}/>
    </div>
    <div className='mt-5'>
    <Button text='Learn More' className='bg-primary-white text-black' />
    </div>
    </div>
    <OfferCard/>
    </Container>
    </div>

  <div className={''}>
  <div className='g1'></div>
  <div className='g2'></div> 
  <div className='g3'></div>  
  </div>
   
         
  </div>
  
    </>
    
  )
}
export default WeOffer