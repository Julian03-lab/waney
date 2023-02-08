'use client'

import { auth } from 'app/services/firebaseClient'
import { useRouter } from 'next/navigation'
import Loader from './Loader'
import { useEffect } from 'react'

export default function VerifyUser () {
  const user = auth
  const router = useRouter()
  useEffect(() => {
    console.log(user.currentUser)
    if (!user.currentUser) {
      router.push('/')
    }
    if (user.currentUser) {
      router.replace('/home')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])
  return (
    <div>
      <Loader />
    </div>
  )
}
