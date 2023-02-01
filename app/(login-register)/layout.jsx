import React from 'react'

export default function LoginLayout ({ children }) {
  return (
    <div className='bg-black-primary flex flex-col justify-around px-9 pb-20 pt-10 h-full'>
      {children}
    </div>
  )
}
