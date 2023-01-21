import React from 'react'

export default function LoginLayout ({ children }) {
  return (
    <div className='bg-black flex flex-col justify-between px-9 py-14 h-screen'>
      {children}
    </div>
  )
}
