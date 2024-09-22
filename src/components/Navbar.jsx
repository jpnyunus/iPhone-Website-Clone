import React from 'react'
import { appleImg, bagImg, searchImg } from '../utils'
import { navLists } from '../constants'

function Navbar() {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
      <nav className='flex w-full screen-max-width'>
        <img className='cursor-pointer' src={appleImg} alt='Apple' width={14} height={18} />

        <div className='flex flex-1 justify-center max-sm:hidden'>
          {navLists.map((nav) => (
            <div key={nav} className='px-5 text-sm cursor-pointer text-gray hover:text-white  transition-all'> {nav} </div>
          ))}
        </div>

        <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
          <img className='cursor-pointer' src={searchImg} alt='Search' width={16} height={16} />
          <img className='cursor-pointer' src={bagImg} alt='Bag' width={16} height={16} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar