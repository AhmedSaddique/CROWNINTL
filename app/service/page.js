"use client"
import Blog from '@/components/HomeBlog'
import Newsletter from '@/components/HomeNewsletter'
import HomePlan from '@/components/HomePlan'
import LayoutProvider from '@/components/LayoutProvider'
import Offer from '@/components/SeriveOffer'
import Hero from '@/components/ServiceHero'
import React from 'react'

const Service = () => {
  return (
    <>
    <LayoutProvider>
    <Hero/>
    <Offer/>
    <HomePlan/>
    <Blog/>
    <Newsletter/>
    </LayoutProvider>
    </>

  )
}

export default Service