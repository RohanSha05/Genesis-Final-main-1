import React from 'react'
import NewsCard from './NewsCard'

const HomeNews = () => {
  return (
    <div>
         <div className="mb-8 mt-20">
            <h1 className="font-semibold text-lg font-rajdhani text-[#00A1E6] underline pb-3.5 text-center  ">
              Latest Articles
            </h1>
            <h2 className="text-5xl  text-center font-bold font-rajdhani leading-[58px] mb-10">
            Let’s Have a Look At Our <br /> Latest Projects.
            </h2>
          </div>
      <NewsCard></NewsCard>
    </div>
  )
}

export default HomeNews