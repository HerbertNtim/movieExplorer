import { navLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'
import SwitchTheme from './SwitchTheme'

const Header = () => {
  return (
    <header className='h-[90px] px-8 py-8 flex justify-center items-center'> 
      <div className='flex gap-8 text-xl'>
        {navLinks.map((link) => (
          <Link href={link.href} key={link.name}>
            {link.name}
          </Link>
        ))}
      </div>

      <div className='mx-16 flex gap-8 text-lg'>
        <SwitchTheme />
        <span>Movies</span>
      </div>
    </header>
  )
}

export default Header
