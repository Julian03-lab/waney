'use client'

import { auth } from 'app/services/firebaseClient'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Button } from './LoginButtons'
import GoogleLogo from 'app/components/svgs/GoogleLogo'

export default function GoogleLogin () {
  const googleAuth = new GoogleAuthProvider()
  const [user] = useAuthState(auth)
  const router = useRouter()

  if (user) {
    console.log(user)
    router.push('/home')
  }

  const googleLogin = async () => {
    const result = await signInWithPopup(auth, googleAuth)
    console.log(result.user)
  }

  return (
    <Button action={googleLogin} text='Log In with Google' icon={<GoogleLogo width={20} height={20} />} buttonstyle='bg-secondary-100 font-extrabold text-[20px] text-black' />
  )
}
