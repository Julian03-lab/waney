'use client'

import Image from 'next/image'

export default function LandingPage () {
  const user = localStorage.getItem('user')
  const { displayName, email, photoURL } = JSON.parse(user)

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='flex flex-col items-center content-center gap-8 p-0'>
        <Image src={photoURL} alt='user profile' width={56} height={56} />

        <div className='flex flex-col items-center content-center gap-2 text-center'>
          <h1 className='font-extrabold text-5xl text-primary-100'>{displayName}</h1>
          <h2 className='font-semibold text-2xl text-primary-100'>{email}</h2>
        </div>
      </div>
    </div>

  )
}
