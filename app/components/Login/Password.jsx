'use client'

import { useState } from 'react'
import EyeOpen from '../svgs/EyeOpen'
import EyeClosed from '../svgs/EyeClosed'

export default function Password ({ htmlFor, text }) {
  const [visible, setVisible] = useState(false)

  const toggleVisibility = (e) => {
    e.preventDefault()
    setVisible(!visible)
  }
  return (
    <>
      <label className='text-xl font-extrabold text-white' htmlFor={htmlFor}> {text}</label>
      <div className='flex items-center bg-primary-400 px-3 py-2 rounded-full w-full'>
        <input className='bg-primary-400 font-medium text-sm text-white w-full outline-none ' type={visible ? 'text' : 'password'} placeholder='Type here...' id={htmlFor} />
        <button onClick={toggleVisibility}>
          {!visible ? <EyeOpen width='32' height='32' fill='#72F0FF' /> : <EyeClosed width='32' height='32' fill='#72F0FF' />}
        </button>
      </div>
    </>
  )
}
