import React from 'react'
import ProjectsBanner from './ProjectsBanner'
import ProjectsMain from './ProjectsMain'
import Testimonial from '../Testimonial/Testimonial'
import HomeMeetTheTeam from '../About/HomeMeetTeam'
import HomeTestimonial from '../Testimonial/HomeTestimonial'

const Projects = () => {
  return (
    <div>
        <ProjectsBanner></ProjectsBanner>
     <ProjectsMain></ProjectsMain>
     <HomeTestimonial></HomeTestimonial>
     <HomeMeetTheTeam></HomeMeetTheTeam>
    </div>
  )
}

export default Projects