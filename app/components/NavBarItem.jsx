'use client'

import { useState } from 'react'
import Link from 'next/link'

function NavBarItem ({ links }) {
  const [activeRoute, setActiveRoute] = useState('Home')

  return (
    <ul className='flex flex-col items-start px-4 py-4 gap-2 w-full bg-[#393E46]'>
      {links.map(({ route, label }) => (
        <li key={route} className={`${activeRoute === label ? 'bg-[#222831] text-[#FFD369]' : 'bg-inherit text-white'} hover:cursor-pointer py-2 px-3 rounded-md font-bold text-xl4`}>
          <Link href={route} onClick={() => setActiveRoute(label)}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default NavBarItem
