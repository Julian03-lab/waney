/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { auth } from 'app/services/firebaseClient'
import { signInWithRedirect, FacebookAuthProvider } from 'firebase/auth'
import { Button } from './LoginButtons'
import FacebookLogo from '../svgs/FacebookLogo'

export default function FacebookLogin ({ disabled }) {
  const facebookAuth = new FacebookAuthProvider()

  const facebookLogin = () => {
    signInWithRedirect(auth, facebookAuth)
  }

  return (
    <Button action={facebookLogin} text='Iniciar sesión con Facebook' icon={<FacebookLogo width={20} height={20} />} />
  )
}
