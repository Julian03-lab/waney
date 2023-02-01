'use client'

import Link from 'next/link'
import GoogleLogin from './GoogleLogin'

export function Button ({ action, text, icon, buttonstyle, disabled }) {
  return (
    <button disabled={disabled} className={`${buttonstyle} py-[6px] px-[12px] flex flex-row gap-2 rounded-xl w-full leading-8 justify-center items-center`} onClick={action}>
      {icon && <div className='p-1 bg-white rounded-full'>{icon}</div>}
      {text}
    </button>

  )
}

export default function LoginButtons () {
  return (
    <div className='flex flex-col justify-center items-center gap-3 w-full'>
      <Link href='/login' className='w-full py-[6px] px-[12px] rounded-xl leading-8 bg-primary-100 font-bold text-[20px] text-black-primary text-center'>
        Entra con tu cuenta
      </Link>
      <Link href='/register' className='w-full py-[6px] px-[12px] rounded-xl leading-8 border-4 border-primary-100 font-semibold text-[20px] text-primary-100 text-center'>
        Crea una cuenta nueva
      </Link>
      <div className='flex items-center gap-2 w-full'>
        <div className='border-primary-100 h-0 border-2 w-full' />
        <h3 className='font-bold text-sm text-primary-100'>O</h3>
        <div className='border-primary-100 h-0 border-2 w-full' />
      </div>
      <GoogleLogin />
    </div>
  )
}
