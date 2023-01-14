import BackButton from 'app/components/Login/BackButton'
import React from 'react'

export default function LoginLayout ({ children }) {
  return (

    <>
      <BackButton />
      {children}
    </>
  )
}
