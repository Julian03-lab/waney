'use client'

import { useState } from 'react'
import { auth } from 'app/services/firebaseClient'
import { usePathname } from 'next/navigation'
import Aside from './Aside'
import { useAuthState } from 'react-firebase-hooks/auth'
import Logo from '../svgs/Logo'

export default function NavBar () {
  const [open, setOpen] = useState(false)
  const [user] = useAuthState(auth)
  const path = usePathname()

  return (
    <>
      <nav className='flex flex-col w-full fixed top-0 lg:hidden z-20'>
        <div className='flex justify-between items-center py-4 px-9 bg-black-secondary'>
          <Logo width='96' height='32' />
          <button onClick={() => setOpen(!open)} className='text-3xl font-medium text-white cursor-pointer self-end lg:hidden'>
            <i className={`bi bi-${open ? 'x' : 'list'}`} />
          </button>
        </div>
      </nav>
      <Aside user={user} path={path} open={open} setOpen={setOpen} />
    </>
  )
}
