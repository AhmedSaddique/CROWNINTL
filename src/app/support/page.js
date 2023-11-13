import Information from '@/components/Information'
import LayoutProvider from '@/components/LayoutProvider'
import Hero from '@/components/SupportHero'
import Topics from '@/components/SupportTopics'
import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import support from '../../../public/assets/images/support.jpg'
import Blog from '@/components/Blog'


const Support = () => {
  return (
    <LayoutProvider>
        <Hero/>
        <Topics/>
        <Information
          image={support}
          badge={"More help"}
          title={'Can’t find an answer?'}
          para={'Aenean velit nisl, aliquam eget diam eu, rhoncus tristique dolor.enean vulputate sodales urna ut vestibulum'}
          button={'Contact Us'}
          endicon={<BsArrowRightShort size={25}/>}
          link={`/contact`}
        />
        <Blog/>
    </LayoutProvider>
  )
}

export default Support