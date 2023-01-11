'use client'

import Button from 'app/components/LoginButton'
import GoogleLogo from 'app/components/svgs/GoogleLogo'
import { auth } from 'app/services/firebaseClient'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import Image from 'next/image'
import isoLogo from 'public/waney-isologo.png'

export default function Login () {
  const googleAuth = new GoogleAuthProvider()

  const googleLogin = async () => {
    const result = await signInWithPopup(auth, googleAuth)
    console.log(result)
  }

  return (
    <div className='flex flex-col items-center justify-between px-9 py-12 h-screen'>
      <div className='flex flex-col items-center content-center gap-8 p-0'>
        <Image src={isoLogo} width={168} height={168} alt='waney logo' />
        <div className='flex flex-col items-center content-center gap-2 text-center'>
          <h1 className='font-extrabold text-5xl text-primary-100'>Waney</h1>
          <h2 className='font-semibold text-2xl text-primary-100'>A simple way to manage your finances</h2>
        </div>
      </div>
      <div className='flex flex-col content-center items-center gap-3 bg-black'>
        <Button action={googleLogin} text='Log In' buttonstyle='bg-secondary-100 font-extrabold text-[20px] text-black' />
        <Button action={googleLogin} text='Sign Up' buttonstyle='border-4 border-secondary-100 font-extrabold text-[20px] text-secondary-100' />
        <div className='flex items-center gap-2'>
          <div className='border-secondary-100 h-0 w-12 border-2' />
          <h3 className='font-bold text-sm text-secondary-100'>OR</h3>
          <div className='border-secondary-100 h-0 w-12 border-2' />
        </div>
        <Button action={googleLogin} text='Log In with Google' icon={<GoogleLogo width={20} height={20} />} buttonstyle='bg-secondary-100 font-extrabold text-[20px] text-black' />
      </div>
    </div>
  )
}
