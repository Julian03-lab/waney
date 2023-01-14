'use client'

import { auth } from 'app/services/firebaseClient'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Button } from './LoginButtons'
import GoogleLogo from 'app/components/svgs/GoogleLogo'
import { useEffect } from 'react'

export default function GoogleLogin () {
  const googleAuth = new GoogleAuthProvider()
  const [user] = useAuthState(auth)
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push('/home')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const googleLogin = async () => {
    return await signInWithPopup(auth, googleAuth)
      .then(result => {
        const { displayName, email, photoURL } = result.user
        const user = {
          displayName,
          email,
          photoURL
        }
        localStorage.setItem('user', JSON.stringify(user))
      })
      .catch()
  }

  return (
    <Button action={googleLogin} text='Login with Google' icon={<GoogleLogo width={20} height={20} />} buttonstyle='bg-secondary-100 font-extrabold text-[14px] text-black' />
  )
}
