import React from 'react'
import Badges from '../Badges'
import { HeadingH3 } from '../Heading'
import { Para14, Para16 } from '../Paragraph'
import { TiTick } from 'react-icons/ti'
import { Choosedata } from '../constants'

const ChooseInfo = () => {
    return (
        <>
            <div className='space-y-4'>
                <Badges className={"bg-primary-gray200 text-primary-white border-none"} title={"Business"} />
                <HeadingH3 className={"text-primary-gray300"} title={"Integrate with over 1,000 project management apps"} />
                <Para16 title={"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective thinking."} />

                <div className='grid grid-cols-1 sm:grid-cols-2'>
                {
                    Choosedata.map((array , index) => (
                        <div className='flex gap-3 mt-2 mb-2 ' key={index}>
                            <TiTick size={22} className='text-gray-600' />
                            <Para14 title={array.title} />  
                        </div>
                    ))
                }
                </div>
                

            </div>

        </>
    )
}

export default ChooseInfo