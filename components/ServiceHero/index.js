import { useState, useEffect } from 'react';
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
import { RiCloseLine, RiMenu4Line } from 'react-icons/ri';
import Plan from '../Plan';
import Faq from '../Faq';
const { TabPane } = Tabs;

const { Link } = Anchor;

const Hero = () => {

  const [showCard, setShowCard] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowCard(window.innerWidth >= 768); // Adjust the breakpoint as needed
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleCard = () => {
    setShowCard((prev) => !prev);
  };
  const closeCard = () => {
    setShowCard(false);
  };
  const { theme, setTheme } = useTheme();

  const tabshow = [
    {id:"1", href:'#Service', title: 'Service'},
    {id:"2", href:'#Media', title: 'Media content' },
    {id:"3", href:'#Plan', title: 'Plan' },
    {id:"4", href:'#Faq', title: "Faq's" },
  ];
  const tablink = [
    {id:"1", href:'/policy', title: 'Privacy Policy', icon:<SiGnuprivacyguard size={20}/>,},
    {id:"2", href:'/support', title: 'Support',icon:<MdContactSupport size={20}/> },
    {id:"3", href:'/contact', title: 'Contact',icon:<BiSolidContact size={20}/> },
  ];
  

  return (
    <>

    <Container className='p-2 md:p-0   flex justify-end '>
      <div className='p-2 block md:hidden rounded-lg bg-primary-blue100 text-white'>
      <RiMenu4Line className={!showCard ? 'visible' : 'hidden'} size={25} onClick={toggleCard} />
      <RiCloseLine className={showCard ? 'visible' : 'hidden'} size={25} onClick={toggleCard} />

      </div>
    </Container>

      <div className='flex flex-wrap md:flex-nowrap p-1'>
    <div className={`w-full md:w-2/12 `}>
      {showCard && (
        <div className='block md:hidden shadow-lg rounded-md backdrop-blur-3xl w-full pb-20  p-3 h-full overflow-hidden overflow-y-scroll max-h-[84vh] sticky top-40 no-scrollbar'>
          
          <HeadingH6  className={`${
              theme === "dark" ? "text-primary-black" : "text-primary-white"
            } p-2`} title={"Table of Content"}/>
          <Anchor affix={false} onClick={closeCard} className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
            {
              tabshow.map((array, index)=>(
                <Link key={index} href={array.href} title={array.title} />
              ))
            }
          </Anchor>
          <hr className='mt-5'/>
          <div className={` text-16 font-medium p-3 space-y-3`}>
          {
              tablink.map((array, index)=>(
                <NextLink key={index} className={` ${
                  theme === 'dark' ? 'text-primary-black hover:text-primary-blue100' : 'text-primary-white hover:text-primary-blue100'
                } flex gap-2`} href={`${array.href}`}>
              {array.icon}
              {array.title}
            </NextLink>
              ))
            }
          
          
          
          </div>
        </div>
)}
<div className='hidden md:block shadow-lg rounded-md backdrop-blur-3xl w-full pb-20 md:w-full p-3 h-full overflow-hidden overflow-y-scroll max-h-[84vh] sticky top-40 no-scrollbar'>
          <HeadingH6  className={`${
              theme === "dark" ? "text-primary-black" : "text-primary-white"
            } p-2`} title={"Table of Content"}/>
          <Anchor affix={false}  className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
          {
              tabshow.map((array, index)=>(
                <Link key={index} href={array.href} title={array.title} />
              ))
            }
          </Anchor>
          <hr className='mt-5'/>
          <div className={` text-16 font-medium p-3 space-y-3`}>
          {
              tablink.map((array, index)=>(
                <NextLink key={index} className={` ${
                  theme === 'dark' ? 'text-primary-black hover:text-primary-blue100' : 'text-primary-white hover:text-primary-blue100'
                } flex gap-2`} href={`${array.href}`}>
              {array.icon}
              {array.title}
            </NextLink>
              ))
            }
          </div>
  </div>
    </div>

        <Container className={`w-full md:w-10/12 `}>
        <div className={`p-1 md:p-3 space-y-10 ${
                theme === 'dark' ? 'text-primary-black' : 'text-primary-white'
              }  `}>
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
                  <div className='border-t-2 p-2 shadow-md backdrop-blur-3xl'>
                    <Para14 title={'high-QPS content serving to users distributed across geographic regions'}/>
                  </div>
                  <div className='border-t-2 p-2 shadow-md backdrop-blur-3xl'>
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
