'use client'

import Loader from 'app/components/Loader'
import { auth } from 'app/services/firebaseClient'
import { signOut } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

export default function Logout () {
  const [user, loading] = useAuthState(auth)
  const router = useRouter()

  const logout = () => {
    signOut(auth).then(() => {
      router.push('/')
    }).catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    if (!user && !loading) {
      router.push('/login')
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, loading])

  return (
    <>
      {
      user
        ? (
          <div>
            <h1 className='text-white font-bold text-2xl'>Estas seguro que quieres cerrar sesión?</h1>
            <button onClick={logout}>Cerrar sesión</button>
          </div>)
        : <Loader />
    }
    </>

  )
}
