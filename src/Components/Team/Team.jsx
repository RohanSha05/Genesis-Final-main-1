import React from 'react'
import OurTeamBanner from './TeamBanner'
import AllMembers from './AllMembers'
import Testimonial from '../Testimonial/Testimonial'
import TeamFAQWithBG from './TeamFAQWithBG'
import HomeTestimonial from '../Testimonial/HomeTestimonial'
import HomeMeetTheTeam from '../About/HomeMeetTeam'


const Team = () => {
  return (
    <div>
        <OurTeamBanner></OurTeamBanner>
        <AllMembers></AllMembers>
        <HomeTestimonial></HomeTestimonial>
       <TeamFAQWithBG></TeamFAQWithBG>
    </div>
  )
}

export default Team