'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import NavBarItem from './NavBarItem'

const links = [
  { route: '/', label: 'Home' },
  { route: '/movements', label: 'Movements' },
  { route: '/accounts', label: 'Accounts' },
  { route: '/settings', label: 'Settings' }
]

export default function NavBar () {
  const [dropdownActive, setDropdownActive] = useState(false)

  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive)
  }

  return (
    <header>
      <nav className='flex flex-col fixed z-20 w-full'>
        <div className='flex justify-between items-center py-4 px-9 bg-black'>
          <button
            onClick={toggleDropdown}
            className='text-primary lg:hidden'
            type='button'
          >
            <FontAwesomeIcon icon={faBars} size='lg' />
          </button>
          <div className='w-[26px] h-[26px] bg-primary' /> {/* This is a placeholder for the logo */}
          <FontAwesomeIcon icon={faUserAlt} size='lg' color='#FFD369' />
        </div>
        {dropdownActive && <NavBarItem links={links} />}

      </nav>
    </header>
  )
}
