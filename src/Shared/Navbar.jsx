import React from 'react'
import NavInfo from './NavInfo'
import NavLast from './NavLast'
import NavTitle from './NavTitle'
import MobileNav from './MobileNav'

const Navbar = () => {
  return (
    <div >
      <div className='hidden md:hidden lg:block'>

      <NavInfo></NavInfo>
      <NavTitle></NavTitle>
      <NavLast></NavLast>
      </div>
      <div className='lg:hidden'>
        <MobileNav></MobileNav>
      </div>
    </div>
  )
}

export default Navbar