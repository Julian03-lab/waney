'use client'

import Link from 'next/link'
import Home from '../svgs/Home'
import Accounts from '../svgs/Accounts'
import Settings from '../svgs/Settings'
import Movements from '../svgs/Movements'
import { auth } from 'app/services/firebaseClient'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

function RenderIcon ({ icon }) {
  const iconClass = 'w-[24px] h-[24px]'
  switch (icon) {
    case 'Home':
      return <Home className={iconClass} />
    case 'Accounts':
      return <Accounts className={iconClass} />
    case 'Settings':
      return <Settings className={iconClass} />
    case 'Movements':
      return <Movements className={iconClass} />
  }
}

function NavBarItem ({ links, activeRoute, setActiveRoute }) {
  const [user] = useAuthState(auth)
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  return (

    <ul className='flex flex-col items-start px-6 py-2 bg-secondary-100'>
      {links.map(({ route, label }) => (
        <li key={route} className='w-full'>
          <Link href={route} onClick={() => setActiveRoute(label)} className={`${activeRoute === label ? 'bg-black text-primary-100 fill-primary-100' : 'bg-inherit text-white fill-white'} hover:cursor-pointer hover:bg-secondary-300 py-2 px-3 rounded-md font-medium text-sm font-nunito flex gap-4 items-center  hover:fill-primary-300`}>
            <RenderIcon icon={label} />
            {label}
          </Link>
        </li>
      ))}
      <li className='w-full'>
        <button className=' bg-inherit text-white fill-white hover:cursor-pointer hover:bg-secondary-300 py-2 px-3 rounded-md font-medium text-sm font-nunito w-full gap-4 items-center hover:fill-primary-300' onClick={() => auth.signOut()}>Sign Out</button>
      </li>
    </ul>
  )
}

export default NavBarItem
