import React from 'react';
import { HeadingH1, HeadingH3, HeadingH4, HeadingH6 } from '../Heading';
import { Para14, Para16, Para18 } from '../Paragraph';
import { useTheme } from 'next-themes';
import { Anchor ,Tabs  } from 'antd';
import { SiGnuprivacyguard } from 'react-icons/si';
import NextLink from 'next/link'; // Rename it to NextLink
import { AiOutlineHome } from 'react-icons/ai';
import Container from '../Container';
import { MdContactSupport } from 'react-icons/md';
import { BiSolidContact } from 'react-icons/bi';
import Plan from '../Plan';
import Faq from '../Faq';
const { TabPane } = Tabs;

const { Link } = Anchor;

const Hero = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className='flex flex-wrap md:flex-nowrap gap-3 p-1 '>
        <div className=' shadow-lg rounded-md backdrop-blur-3xl w-full md:w-3/12 p-3 h-fit'>
          <HeadingH6  className={`${
              theme === "dark" ? "text-primary-black" : "text-primary-white"
            } p-2`} title={"Table of Content"}/>
          <Anchor affix={false} className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
            <Link className='text-white' href="#Service" title="Service" />
            <Link href="#Media" title="Media content" />
            <Link href="#Plan" title="Plan" />
            <Link href="#Faq" title="Faq's" />
            {/* <Link href="#section3" title="Section 3">
              <Link href="#subsection3-1" title="Subsection 3.1" />
            </Link> */}
          </Anchor>
          <hr className='mt-5'/>
          <div className={` text-16 font-medium p-3 space-y-3`}>
          <NextLink className={` ${
                theme === 'dark' ? 'text-primary-black hover:text-primary-blue100' : 'text-primary-white hover:text-primary-blue100'
              } flex gap-2`} href='/policy'>
            <SiGnuprivacyguard size={20}/>
            Privacy Policy
          </NextLink>
          <NextLink className={` ${
                theme === 'dark' ? 'text-primary-black hover:text-primary-blue100' : 'text-primary-white hover:text-primary-blue100'
              } flex gap-2`} href='/support'>
            <MdContactSupport size={20}/>
            Support
          </NextLink>
          <NextLink className={` ${
                theme === 'dark' ? 'text-primary-black hover:text-primary-blue100' : 'text-primary-white hover:text-primary-blue100'
              } flex gap-2`} href='/contact'>
            <BiSolidContact size={20}/>
            Contact
          </NextLink>
          </div>
        </div>


        <Container className={`w-full md:w-9/12`}>
        <div className={`p-3 space-y-10 ${
                theme === 'dark' ? 'text-primary-black' : 'text-primary-white'
              }`}>
          <div id="service">
            <div className={`pt-5 w-full `}
            >
              <div className='space-y-4 '>
                <Para18 className={'font-bold text-justify'} title={"________ Service"} />
                <div className='-space-y-3'>
                  <HeadingH1 title={"Advanced analytics to grow "} />
                  <HeadingH1 title={"your business"} />
                </div>
                <Para16
                  title={"Collaborate, plan projects and manage resources with powerful features that your whole team can use."}
                />
                <Para16
                  title={' The latest news, tips and advice to help you run your business with less fuss.'}
                />
              </div>
            </div>
          </div>
          <div id="Media">
          <HeadingH3 title={'Media content storage and delivery'}/>
          <Tabs defaultActiveKey="1"  tabBarStyle={{ border: 'none' }} className={``}>
            <TabPane  tab={<span className={`flex gap-1 ${
                theme === 'dark' ? 'text-primary-black' : 'text-primary-white'
              }`}><AiOutlineHome  size={20} className='mt-1'/> Tab1</span>} key="1">
              <div className={`space-y-3 ${
                theme === 'dark' ? 'text-primary-black' : 'text-primary-white'
              }`}>
                <HeadingH4 title={'Store data to stream audio or video'} />
                <Para16 title={'Stream audio or video directly to apps or websites with Cloud Storage’s geo-redundant capabilities. Geo-redundant storage with the highest level of availability and performance is ideal for low-latency, high-QPS content serving to users distributed across geographic regions.'}/>

                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pt-5'>
                  <div className='border p-2 rounded-md shadow-md backdrop-blur-3xl'>
                    <Para14 title={'high-QPS content serving to users distributed across geographic regions'}/>
                  </div>
                  <div className='border p-2 rounded-md shadow-md backdrop-blur-3xl'>
                    <Para14 title={'high-QPS content serving to users distributed across geographic regions'}/>
                  </div>
                </div>
              </div>
            </TabPane>
            <TabPane tab={<span className={`flex gap-1 ${
                theme === 'dark' ? 'text-primary-black' : 'text-primary-white'
              }`}><AiOutlineHome  size={20} className='mt-1'/> Tab2</span>} key="2">
            <div className={`space-y-3 ${
                theme === 'dark' ? 'text-primary-black' : 'text-primary-white'
              }`}>
                <HeadingH4 title={'Store data to stream audio or video'} />
                <Para16 title={'Stream audio or video directly to apps or websites with Cloud Storage’s geo-redundant capabilities. Geo-redundant storage with the highest level of availability and performance is ideal for low-latency, high-QPS content serving to users distributed across geographic regions.'}/>

                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pt-5'>
                  <div className='border p-2 rounded-md shadow-md backdrop-blur-3xl'>
                    <Para14 title={'high-QPS content serving to users distributed across geographic regions'}/>
                  </div>
                  <div className='border p-2 rounded-md shadow-md backdrop-blur-3xl'>
                    <Para14 title={'high-QPS content serving to users distributed across geographic regions'}/>
                  </div>
                </div>
              </div>
            </TabPane>
          
          </Tabs>
          </div>

          <div id="Plan" className='mt-5'>
              <Plan/>
          </div>
          <div id="Faq" className='mt-5'>
              <Faq/>
          </div>
        </div>
        </Container>
      </div>
    </>
  );
};

export default Hero;
