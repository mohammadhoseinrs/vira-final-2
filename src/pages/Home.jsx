import React from 'react'
import Customer from '../components/customer/Customer'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/navbar/Navbar'
import Services from '../components/service1/Services'
import Showcase from '../components/showcase/Showcase'
import Worksample from '../components/WorkSample/Worksample'
import Sliderimage from '../components/Sliderimage'
import Familymember from '../components/familymember/Familymember'
import Worksampletest from '../components/WorkSample/Worksampletest'
import ServicesSlider from '../components/service1/ServicesSlider'



export default function Home() {
  return (
      <>
    <Showcase />
    <Worksampletest />
    <Customer />
    <Services />
    <Familymember />
    </>
  )
}
