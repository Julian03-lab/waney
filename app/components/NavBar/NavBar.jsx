'use client'

import { useState } from 'react'
import Link from 'next/link'
import NavBarItem from './NavBarItem'
import Bars from '../svgs/Bars'
import UserIcon from '../svgs/UserIcon'
import Isologo from '../svgs/Isologo'

export const links = [
  { route: '/home', label: 'Home' },
  { route: '/movements', label: 'Movements' },
  { route: '/accounts', label: 'Accounts' },
  { route: '/settings', label: 'Settings' }
]

export default function NavBar () {
  const [dropdownActive, setDropdownActive] = useState(false)
  const [activeRoute, setActiveRoute] = useState('Home')

  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive)
  }

  return (
    <nav className='flex flex-col w-full'>
      <div className='flex justify-between items-center py-4 px-9 bg-black-primary'>
        <button
          onClick={toggleDropdown}
          className='text-primary hidden'
          type='button'
        >
          <Bars width={24} height={24} className='fill-primary-100 hover:fill-primary-100' />
        </button>
        <Link href='/profile' onClick={() => setActiveRoute('')}>
          <UserIcon width={32} height={32} className='fill-primary-100 hover:fill-primary-300' />
        </Link>
        <Isologo width='32' height='32' />
      </div>
      {dropdownActive && <NavBarItem links={links} activeRoute={activeRoute} setActiveRoute={setActiveRoute} />}
    </nav>
  )
}
