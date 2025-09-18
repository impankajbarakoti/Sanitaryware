import React from 'react'
import HeroSection from './HeroSection'
import WhoWeAre from './WhoWeAre'
import Services from './Services'
import QuoteSection from './QuoteSection'
import SimpleSteps from './SimpleSteps'
import SpecialProduct from './SpecialProduct'
import Testimonials from './Testimonials'
import ClientLogos from './ClientLogos'

const HomeMain = () => {
  return (
    <div>
          <HeroSection />
          <WhoWeAre />
          <Services />
          <QuoteSection />
          <SimpleSteps />
          <SpecialProduct />
          <Testimonials />
          <ClientLogos/>
    </div>
  )
}

export default HomeMain
