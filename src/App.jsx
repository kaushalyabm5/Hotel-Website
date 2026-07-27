import React, { useEffect, useState } from 'react'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import { destroyLenis, initLenis } from './Components/initLenis'

import Gallery from './Components/Gallery'
import Testimonials from './Components/Testimonials'
import Welcome from './Components/Welcome'
import Accommodation from './Components/Accommodation'
import Footer from './Components/Footer'
import ScrollToTop from './Components/ScrollToTop'
import About from './Components/About'
import WhyStayWithUs from './Components/WhyStayWithUs'
import Facilities from './Components/Facilities'
import CTA from './Components/CTA'
import Gallery2 from './Components/Gallery2'
import LoadingScreen from './Components/LoadingScreen'
import Places from './Components/Places'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const instance = initLenis()

    // Hide the loading screen after 2.5 seconds
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => {
      destroyLenis(instance)
      clearTimeout(timer)
    }
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

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
      <Gallery2 />
       <Places />
      <Testimonials />
     
      <CTA />
      <Footer />

      <ScrollToTop />
    </div>
  )
}

export default App