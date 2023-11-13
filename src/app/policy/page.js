import LayoutProvider from '@/components/LayoutProvider'
import Privacyinfo from '@/components/PrivacyInfo'
import PrivacyHero from '@/components/privacyhero'
import React from 'react'

const PrivacyPolicy = () => {
  return (
    <LayoutProvider>
        <PrivacyHero/>
        <Privacyinfo/>
    </LayoutProvider>
  )
}

export default PrivacyPolicy