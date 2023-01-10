'use client'

import GoogleLogo from 'app/components/svgs/GoogleLogo'
import { auth } from 'app/services/firebaseClient'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

export default function Login () {
  const googleAuth = new GoogleAuthProvider()

  const googleLogin = async () => {
    const result = await signInWithPopup(auth, googleAuth)
    console.log(result)
  }

  return (
    <div className='flex flex-col items-center justify-between px-9 py-12 h-screen'>
      <div className='flex flex-col items-center content-center gap-8 p-0'>
        <div className='h-[168px] w-[168px] bg-primary-100' />
        <div className='flex flex-col items-center content-center gap-2 text-center'>
          <h1 className='font-nunito font-extrabold text-5xl text-primary-100'>Waney</h1>
          <h2 className='font-nunito font-bold text-2xl text-primary-100'>A simple way to manage your finances</h2>
        </div>
      </div>
      <button className='bg-primary-100 py-[6px] px-[12px] flex gap-1 rounded-full text-white font-bold text-sm items-center font-nunito' onClick={googleLogin}>
        <div className='p-1 bg-white rounded-full'>
          <GoogleLogo width={24} height={24} />
        </div>
        Login with Google
      </button>
    </div>
  )
}
