'use client'

import React, { useEffect } from 'react'
import Loader from './Loader'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/navigation'
import { auth } from 'app/services/firebaseClient'

export default function VerifyRoute ({ children }) {
  const [user, loading] = useAuthState(auth)
  const router = useRouter()

  useEffect(() => {
    if (!loading && user) {
      router.push('/home')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, loading])

  if (loading) {
    return <Loader />
  }
  if (!user && !loading) {
    return (
      <>
        {children}
      </>
    )
  }
}
