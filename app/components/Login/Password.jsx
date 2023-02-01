'use client'

import { useState } from 'react'
import EyeOpen from '../svgs/EyeOpen'
import EyeClosed from '../svgs/EyeClosed'

export default function Password ({ htmlFor, text, handlePassword, handleConfirm, value }) {
  const [visible, setVisible] = useState(false)

  const toggleVisibility = (e) => {
    e.preventDefault()
    setVisible(!visible)
  }
  return (

    <div className='w-full flex gap-2'>
      <div className='relative w-full'>
        <input required autoComplete='on' type={visible ? 'text' : 'password'} className={`${value ? 'opacity-100' : 'opacity-50'} w-full pt-6 pb-2 px-2 font-medium text-base bg-black-primary border-2 rounded-xl text-white peer focus:opacity-100 focus:font-medium autofill:!text-error focus:outline-none border-primary-100 focus:shadow-primary-100 focus:shadow-glow`} placeholder='********' value={value} id={htmlFor} onChange={htmlFor === 'password' ? handlePassword : handleConfirm} />
        <label className='opacity-100 absolute text-sm font-bold top-2 left-2 text-primary-100' htmlFor={htmlFor}> {text}</label>
      </div>
      <button onClick={toggleVisibility}>
        {!visible ? <EyeOpen width='32' height='32' fill='#45ADFF' /> : <EyeClosed width='32' height='32' fill='#45ADFF' />}
      </button>
    </div>
  )
}
