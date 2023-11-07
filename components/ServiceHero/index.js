import React from 'react';
import { HeadingH1, HeadingH3 } from '../Heading';
import { Para16, Para18 } from '../Paragraph';
import { useTheme } from 'next-themes';
import { Anchor ,Tabs  } from 'antd';
import { SiGnuprivacyguard } from 'react-icons/si';
import NextLink from 'next/link'; // Rename it to NextLink
const { TabPane } = Tabs;

const { Link } = Anchor;

const Hero = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className='flex gap-3 p-1 '>
        <div className=' shadow-lg rounded-md backdrop-blur-3xl w-3/12 p-3 '>
          <Anchor affix={false} className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
            <Link className='text-white' href="#Service" title="Service" />
            <Link href="#Media" title="Media content" />
            <Link href="#section3" title="Section 3">
              <Link href="#subsection3-1" title="Subsection 3.1" />
            </Link>
          </Anchor>
          <hr className='mt-5'/>
          <div className={` text-16 font-medium p-3 space-y-3`}>
          <NextLink className={` ${
                theme === 'dark' ? 'text-primary-black hover:text-primary-blue100' : 'text-primary-white hover:text-primary-blue100'
              } flex gap-2`} href='/service'>
            <SiGnuprivacyguard size={20}/>
            Privacy Policy
          </NextLink>
          <NextLink className={` ${
                theme === 'dark' ? 'text-primary-black hover:text-primary-blue100' : 'text-primary-white hover:text-primary-blue100'
              } flex gap-2`} href='/service'>
            <SiGnuprivacyguard size={20}/>
            Support
          </NextLink>
          <NextLink className={` ${
                theme === 'dark' ? 'text-primary-black hover:text-primary-blue100' : 'text-primary-white hover:text-primary-blue100'
              } flex gap-2`} href='/service'>
            <SiGnuprivacyguard size={20}/>
            Faq's
          </NextLink>
          <NextLink className={` ${
                theme === 'dark' ? 'text-primary-black hover:text-primary-blue100' : 'text-primary-white hover:text-primary-blue100'
              } flex gap-2`} href='/service'>
            <SiGnuprivacyguard size={20}/>
            Contact
          </NextLink>
          </div>
        </div>
        <div className='p-3'>
          <div id="service">
            <div
              className={`${
                theme === 'dark' ? 'text-primary-black' : 'text-primary-white'
              } pt-10 w-full `}
            >
              <div className='xl:p-18 lg:p-10 md:p-2 sm:p-2  space-y-4 text-center'>
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
          <div>
            <HeadingH3 title={'Media content storage and delivery'}/>
          <Tabs defaultActiveKey="1"  tabBarStyle={{ border: 'none' }}>
            <TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
    </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
