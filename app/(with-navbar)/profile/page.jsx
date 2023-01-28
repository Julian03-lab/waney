'use client'

import Loader from 'app/components/Loader'
import { auth } from 'app/services/firebaseClient'
import { useAuthState } from 'react-firebase-hooks/auth'

export default function Movements () {
  const [user, loading] = useAuthState(auth)

  if (loading) return <Loader />

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-6xl font-bold'>Perfil de {user.displayName}</h1>
    </div>
  )
}
