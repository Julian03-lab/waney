import React from 'react'

export default function LoginLayout ({ children }) {
  return (
    <body className='bg-black-primary flex flex-col justify-around items-center px-9 py-20 h-screen'>
      {children}
    </body>
  )
}
