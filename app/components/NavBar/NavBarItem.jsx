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

    <ul className='flex flex-col items-start px-9 py-4 bg-black gap-2 border-b-2 border-primary-100'>
      {links.map(({ route, label }) => (
        <li key={route} className='w-full'>
          <Link href={route} onClick={() => setActiveRoute(label)} className={`${activeRoute === label ? ' text-primary-100 fill-primary-100 border-2 border-primary-100' : 'text-white fill-white'} hover:cursor-pointer hover:bg-primary-400 py-2 px-3 rounded-full font-bold text-xl flex gap-4 hover:fill-black hover:text-black bg-black`}>
            <RenderIcon icon={label} />
            {label}
          </Link>
        </li>
      ))}
      <li className='w-full my-2'>
        <Link href='/signout' className='text-white fill-white hover:cursor-pointer  hover:text-black hover:bg-primary-300 py-2 px-3  rounded-full font-bold text-xl flex justify-center hover:fill-primary-400 border-2 border-primary-100'>
          Cerrar sesión
        </Link>
      </li>
    </ul>
  )
}

export default NavBarItem
