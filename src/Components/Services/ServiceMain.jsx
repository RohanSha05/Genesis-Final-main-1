import React from 'react'
import ServiceBanner from './ServiceBanner'
import HomeServices from './HomeServices'
import Testimonial from '../Testimonial/Testimonial'
import HomeMeetTheTeam from '../About/HomeMeetTeam'
import ServicePage from './ServicePage'
import HomeTestimonial from '../Testimonial/HomeTestimonial'

const ServiceMain = () => {
  return (
    <div>
        <ServiceBanner></ServiceBanner>
       <ServicePage></ServicePage>
       <HomeTestimonial></HomeTestimonial>
        <HomeMeetTheTeam></HomeMeetTheTeam>
    </div>
  )
}

export default ServiceMain