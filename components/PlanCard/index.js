import Image from 'next/image'
import React, { useEffect } from 'react'
import { TiTick } from 'react-icons/ti'
import Button from '../Button'
import { Plandata } from '../constants'
import { useTheme } from 'next-themes'
import { HeadingH3, HeadingH4 } from '../Heading'
import Container from '../Container'
import { Para12, Para14 } from '../Paragraph'

const PlanCard = (className) => {

    const { theme, setTheme } = useTheme();


    return (
        <Container>
<div className={`mt-10 mb-10 gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 `}>
            {
                Plandata && Plandata.map((array, index) => (
                    <div className={`  space-y-2 shadow shadow-primary-blue100 mb-5 rounded-lg p-4 hover:scale-105 transition duration-300 ${
                        theme === 'dark' ? 'bg-primary-white text-black' : 'bg-primary-blue100 text-white'
                      } `} key={index}>
                            <div className=''>
                                <HeadingH3  title={array.heading} />
                                <p className='font-normal'>{array.descrip}</p>
                            </div>
                        <div>
                            <HeadingH4 title={array.pay}/>
                            <p className='font-normal'>{array.card}</p>
                        </div>
                        <div>
                            <hr />
                        </div>
                        <Button text={"Choose Plan"} className="w-full hover:scale-105 justify-center flex bg-primary-blue200 hover:bg-primary-blue300 border-none text-white" />

                       {array.benefits.map((array, index)=>(
                        <>
                        <HeadingH4 title={array.Feature}/>
                        <div className='flex'>
                            <TiTick size={20} className={`${
                        theme === 'dark' ? ' text-black' : ' text-white'
                      }`} />
                            <Para14 className='' title={array.beni} />
                        </div>
                        <Para12 title={array.info}/>

                        </>
                        
                       ))} 
                        
                       
                    </div>
                ))
            }
        </div>
        </Container>
        
    )
}

export default PlanCard;
