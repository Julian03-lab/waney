'use client'

import { useState } from 'react'
import Link from 'next/link'
import NavBarItem from './NavBarItem'
import Bars from '../svgs/Bars'
import UserIcon from '../svgs/UserIcon'
import Image from 'next/image'
const links = [
  { route: '/home', label: 'Home' },
  { route: '/movements', label: 'Movements' },
  { route: '/accounts', label: 'Accounts' },
  { route: '/settings', label: 'Settings' }
]

export default function NavBar () {
  const user = localStorage.getItem('user')
  const { photoURL } = JSON.parse(user)
  const [dropdownActive, setDropdownActive] = useState(false)
  const [activeRoute, setActiveRoute] = useState('Home')

  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive)
  }

  return (
    <nav className='flex flex-col w-full'>
      <div className='flex justify-between items-center py-4 px-9 bg-white'>
        <button
          onClick={toggleDropdown}
          className='text-primary lg:hidden'
          type='button'
        >
          <Bars width={24} height={24} className='fill-primary-100 hover:fill-primary-300' />
        </button>
        <Link href='/' onClick={() => setActiveRoute('Home')}>
          <div className='w-[32px] h-[32px] bg-primary-100' /> {/* This is a placeholder for the logo */}
        </Link>

        <Link href='/profile' onClick={() => setActiveRoute('')}>
          {user ? <Image src={photoURL} alt='user profile' width={24} height={24} className='rounded-full' /> : <UserIcon width={24} height={24} className='fill-primary-100 hover:fill-primary-300' />}
        </Link>
      </div>
      {dropdownActive && <NavBarItem links={links} activeRoute={activeRoute} setActiveRoute={setActiveRoute} />}
    </nav>
  )
}
