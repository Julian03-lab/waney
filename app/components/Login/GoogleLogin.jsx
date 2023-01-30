'use client'

import { auth } from 'app/services/firebaseClient'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Button } from './LoginButtons'
import GoogleLogo from 'app/components/svgs/GoogleLogo'
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'

export default function GoogleLogin () {
  const googleAuth = new GoogleAuthProvider()
  const [user] = useAuthState(auth)
  const router = useRouter()
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies(['userID'])

  useEffect(() => {
    if (user) {
      router.push('/home')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const googleLogin = async () => {
    return await signInWithPopup(auth, googleAuth)
      .then(() => {
        setCookie('userID', auth.currentUser.uid, { path: '/' })
        router.push('/home')
      })
      .catch(e => console.log(e))
  }

  return (
    <Button action={googleLogin} text='Iniciar sesión con Google' icon={<GoogleLogo width={20} height={20} />} buttonstyle='bg-primary-100 font-extrabold text-[14px] text-black-primary' />
  )
}
