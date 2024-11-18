import React from 'react'
import HeroPage from './HeroPage'
import SectionPage from './SectionPage'
import CustomPage from './CustomPage'
import FooterPage from './FooterPage'
import Pricing from './Pricing'

const HomePage = () => {
  return (
    <>
      <HeroPage/>
      <SectionPage/>
      <CustomPage/>
      <Pricing/>
      <FooterPage/>
    </>
  )
}

export default HomePage
