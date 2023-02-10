/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { auth } from 'app/services/firebaseClient'
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import { Button } from './LoginButtons'
import GoogleLogo from 'app/components/svgs/GoogleLogo'

export default function GoogleLogin ({ disabled }) {
  const googleAuth = new GoogleAuthProvider()

  const googleLogin = () => {
    signInWithRedirect(auth, googleAuth)
  }

  return (
    <Button action={googleLogin} text='Iniciar sesión con Google' icon={<GoogleLogo width={20} height={20} />} />
  )
}
