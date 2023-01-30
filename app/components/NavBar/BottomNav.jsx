'use client'

import { links } from 'app/components/NavBar/NavBar'
import Link from 'next/link'

import { useState } from 'react'

function RenderIcon ({ icon, activeRoute }) {
  const iconStyle = 'text-[1.5rem] text-white hover:text-primary-100'
  switch (icon) {
    case 'Home':
      if (activeRoute === 'Home') {
        return <i className={`bi bi-house-door-fill ${iconStyle}}`} />
      } else {
        return <i className={`bi bi-house-door ${iconStyle}}`} />
      }
    case 'Movements':
      if (activeRoute === 'Movements') {
        return <i className={`bi bi-stickies-fill ${iconStyle}}`} />
      } else {
        return <i className={`bi bi-stickies ${iconStyle}}`} />
      }
    case 'Accounts':
      if (activeRoute === 'Accounts') {
        return <i className={`bi bi-wallet-fill ${iconStyle}}`} />
      } else {
        return <i className={`bi bi-wallet ${iconStyle}}`} />
      }
    case 'Settings':
      if (activeRoute === 'Settings') {
        return <i className={`bi bi-person-fill-gear ${iconStyle}}`} />
      } else {
        return <i className={`bi bi-person-gear ${iconStyle}}`} />
      }
  }
}

export default function BottomNav () {
  const [activeRoute, setActiveRoute] = useState('Home')

  return (
    <footer className='w-full fixed bottom-0'>
      <ul className=' flex flex-row justify-between items-center px-9 py-3 bg-black-primary border-t-2 border-t-primary-100'>
        {links.map(({ route, label }) => (
          <li key={route}>
            <Link href={route} onClick={() => setActiveRoute(label)}>
              <RenderIcon icon={label} activeRoute={activeRoute} />
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  )
}
