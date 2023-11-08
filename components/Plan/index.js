"use client"
import React, { useState } from 'react'
import Button from '../Button'
import PlanCard from '../PlanCard'
import { BiRightArrowAlt } from 'react-icons/bi'
import { HeadingH1, HeadingH6 } from '../Heading'
import { useTheme } from 'next-themes'
import { Para18 } from '../Paragraph'


const Plan = () => {
  const tabs = [
    { id: "1", Title: "monthly", content: <PlanCard /> },
    { id: "2", Title: "Yearly", content: <PlanCard /> },
  ];
  const [activeTab, setActiveTab] = useState(0);
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    setActiveTab(activeTab === 0 ? 1 : 0);
  };
  return (
    
    <div className=' w-full p-4 bg-finger bg-no-repeat shadow backdrop-blur-3xl'>
      <div className='grid grid-cols-1 md:grid-cols-2 mb-3 '>
        <div className=''>
          <HeadingH1 spanclass={'text-primary-blue100'} title={'Choose The Best '} title1={"Plan"}/>
          <Para18 title={'Pick your plan.'}/>
          <Para18 title={'Change whenever you want.'}/>
        </div>
        <div className='flex justify-end items-end'>
          <Button className={`${
          theme === 'dark' ? 'bg-primary-white text-black' : 'bg-primary-white text-black'} shadow border-none`} endicon={<BiRightArrowAlt className='mt-1' size={20} />} text="Learn Mores" />
        </div>
      </div>


      <div className='gap-3 flex justify-center mb-10'>
        <HeadingH6 className={" mt-2"} title={"Monthly"}/>
        <div className='border-4 p-1 rounded-xl hover:border-primary-blue100 duration-300 transition'>
        <div className="relative  inline-block w-16 mt-1 select-none transition duration-400">
          <input
            type="checkbox"
            name="toggle"
            id="toggle"
            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-primary-blue200 border-4 appearance-none cursor-pointer"
            onChange={handleToggle}
            checked={activeTab === 1}
          />
          <label
            htmlFor="toggle"
            className="toggle-label block overflow-hidden h-6 rounded-full bg-primary-blue200 cursor-pointer"
          ></label>
        </div>
        </div>
        
        <HeadingH6 className={" mt-2"} title={"Yearly"}/>

      </div>

      {tabs[activeTab].content}
    </div>
  )
}

export default Plan


 {/* <div className='flex justify-center gap-2 text-white' >

        {
          tabs.map((array, index) => (
            <Button key={index} text={array.Title}
              onClick={() => handleTabClick(index)}
              className={`${activeTab === index ? 'active bg-primary-gray300' : ''
                } hover:bg-primary-gray300 focus:bg-primary-gray300 hover:border-primary-gray300`} />

          ))
        }
        
      </div> */}