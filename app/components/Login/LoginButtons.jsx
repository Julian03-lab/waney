'use client'

import Link from 'next/link'
import GoogleLogin from './GoogleLogin'

export function Button ({ action, text, icon, buttonstyle }) {
  return (
    <button className={`${buttonstyle} py-[6px] px-[12px] flex flex-row gap-1 rounded-full w-full leading-8 place-content-center`} onClick={action}>
      {icon && <div className='p-1 bg-white rounded-full'>{icon}</div>}
      {text}
    </button>

  )
}

export default function LoginButtons () {
  return (
    <>
      <Link href='/login' className='w-full'>
        <Button text='Log In' buttonstyle='bg-secondary-100 font-extrabold text-[20px] text-black' />
      </Link>
      <Link href='/register' className='w-full'>
        <Button text='Sign Up' buttonstyle='border-4 border-secondary-100 font-extrabold text-[20px] text-secondary-100' />
      </Link>
      <div className='flex items-center gap-2'>
        <div className='border-secondary-100 h-0 w-12 border-2' />
        <h3 className='font-bold text-sm text-secondary-100'>OR</h3>
        <div className='border-secondary-100 h-0 w-12 border-2' />
      </div>
      <GoogleLogin />
    </>
  )
}
