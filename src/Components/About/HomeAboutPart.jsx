import React from 'react'
import HomeAbout from './HomeAbout'
import HomeAboutCard from './HomeAboutCard'


const HomeAboutPart = () => {
  return (
    <div className=' '>
        <div 
        className=" bg-no-repeat bg-bottom"
        style={{ backgroundImage: "url('https://webextheme.com/html/loxicat/images/bg/ac2.png')" }}>
            <HomeAbout ></HomeAbout>
      <HomeAboutCard></HomeAboutCard>
        </div>
    </div>
  )
}

export default HomeAboutPart