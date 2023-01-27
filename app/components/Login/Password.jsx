'use client'

import { useState } from 'react'
import EyeOpen from '../svgs/EyeOpen'
import EyeClosed from '../svgs/EyeClosed'

export default function Password ({ htmlFor, text, handlePassword, handleConfirm }) {
  const [visible, setVisible] = useState(false)

  const toggleVisibility = (e) => {
    e.preventDefault()
    setVisible(!visible)
  }
  return (
    <>
      <label className='text-lg font-extrabold text-white' htmlFor={htmlFor}> {text}</label>
      <div className='flex items-center bg-primary-400 px-3 py-2 rounded-full w-full justify-center'>
        <input required autoComplete='on' className='bg-primary-400 font-semibold text-base text-black-primary w-full outline-none placeholder:text-black-primary placeholder:text-opacity-50' type={visible ? 'text' : 'password'} placeholder='********' id={htmlFor} onChange={htmlFor === 'password' ? handlePassword : handleConfirm} />
        <button onClick={toggleVisibility}>
          {!visible ? <EyeOpen width='32' height='32' fill='#72F0FF' /> : <EyeClosed width='32' height='32' fill='#72F0FF' />}
        </button>
      </div>
    </>
  )
}
