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
      <AboutUs2 />
      <WhyUs />
      <Accommodation />
      <Gallery />
      <Testimonials />
    </div>
  )
}

export default App