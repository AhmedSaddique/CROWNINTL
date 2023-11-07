import React from 'react'
import { Anchor } from 'antd';
const { Link } = Anchor;
const Services = () => {
  return (
    <>
     <div className='flex gap-3'>

    <div className='border w-3/12'>
    
    <Anchor
    affix={false}
    items={[
      {
        key: '1',
        href: '#section1',
        title: 'Features',
      },
      {
        key: '2',
        href: '#section2',
        title: 'How it Work',
      },
      {
        key: '3',
        href: '#api',
        title: 'API',
        children: [
          {
            key: '4',
            href: '#anchor-props',
            title: 'Anchor Props',
          },
          {
            key: '5',
            href: '#link-props',
            title: 'Link Props',
          },
        ],
      },
    ]}
    />
      </div>
      <div>
      <div id="section1" className='h-screen'>
        asd
      </div>

      <div id="section2" className='h-screen'>
       1231
      </div>

      <div id="section3" className='h-screen'>
       !@#
      </div>
    </div>

     
    </div>

    </>
  )
}

export default Services