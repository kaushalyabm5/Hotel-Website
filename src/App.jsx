import React, { useEffect } from 'react'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import { destroyLenis, initLenis } from './Components/initLenis'

import Gallery from './Components/Gallery'
import Testimonials from './Components/Testimonials'
import Welcome from './Components/Welcome'
import AboutUs2 from './Components/AboutUs2'
import WhyUs from './Components/WhyUs'
import Accommodation from './Components/Accommodation'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import ScrollToTop from './Components/ScrollToTop'
import Services from './Components/Services'
import About from './Components/About'
import WhyStayWithUs from './Components/WhyStayWithUs'
import Facilities from './Components/Facilities'
import CTA from './Components/CTA'

const App = () => {

   useEffect(() => {
    const instance = initLenis();

    return () => {
      destroyLenis(instance);
    };
  }, []);


  return (
    <div>
      <Navbar />
      <Hero />
      <Welcome />
      <About />
      <WhyStayWithUs />
      <Accommodation />
      <Facilities />
      <Gallery />
      <Testimonials />
      <CTA />
      <Footer />

      <ScrollToTop />
    </div>
  )
}

export default App