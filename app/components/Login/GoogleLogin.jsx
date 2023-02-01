'use client'

import { auth } from 'app/services/firebaseClient'
import { GoogleAuthProvider, getAdditionalUserInfo, signInWithRedirect, getRedirectResult } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Button } from './LoginButtons'
import GoogleLogo from 'app/components/svgs/GoogleLogo'
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { defaultCategories } from 'app/(with-navbar)/categories/addCategoryDB'

export default function GoogleLogin ({ disabled }) {
  const googleAuth = new GoogleAuthProvider()
  const [user] = useAuthState(auth)
  const router = useRouter()
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies(['userID'])

  useEffect(() => {
    (async () => {
      const result = await getRedirectResult(auth)
      if (result) {
        if (getAdditionalUserInfo(result).isNewUser) {
          defaultCategories(auth.currentUser.uid)
        }
        setCookie('userID', auth.currentUser.uid, { path: '/' })
        router.push('/home')
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const googleLogin = () => {
    signInWithRedirect(auth, googleAuth)
  }

  return (
    <Button action={googleLogin} text='Iniciar sesión con Google' icon={<GoogleLogo width={20} height={20} />} buttonstyle='bg-primary-100 font-extrabold text-base text-black-primary' />
  )
}
