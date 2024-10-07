import React from 'react'
import AboutBanner from './AboutBanner'
import HomeAbout from './HomeAbout'
import HomeAboutCard from './HomeAboutCard'
import HomeMeetTheTeam from './HomeMeetTeam'
import HomeTestimonial from '../Testimonial/HomeTestimonial'

const About = () => {
  return (
    <div>
        <AboutBanner></AboutBanner>
        <HomeAbout></HomeAbout>
        <HomeAboutCard></HomeAboutCard>
       <HomeTestimonial></HomeTestimonial>
        <HomeMeetTheTeam></HomeMeetTheTeam>
    </div>
  )
}

export default About