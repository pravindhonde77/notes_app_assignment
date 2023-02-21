import React from 'react'
import  "./Header.css"
import { HiMenuAlt2 } from "react-icons/hi";


const Header = () => {
  return (
    <div className='head'>
      <div className='head1'>
      <HiMenuAlt2 size={30} />
      <h2>Notes</h2>
      </div>
    </div>
  )
}

export default Header