'use client'

import Loader from 'app/components/Loader'
import Isologo from 'app/components/svgs/Isologo'
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
          <div className='h-screen flex flex-col justify-center'>
            <div className='flex flex-col rounded-xl items-center border-2 border-primary-100 shadow py-10 px-2 gap-6'>
              <Isologo width='72' height='72' />
              <h1 className='text-white font-semibold text-xl text-center'>¿Quieres cerrar tu sesion de Waney?</h1>
              <div className='flex flex-col gap-3'>
                <button onClick={logout} className='py-1 px-3 rounded-full leading-8 bg-primary-100 font-extrabold text-base text-black shadow'>Cerrar sesión</button>
                <button onClick={() => router.back()} className='py-1 px-3 rounded-full leading-8 bg-black font-extrabold text-base text-primary-100 shadow border-2 border-primary-100'>Cancelar</button>
              </div>
            </div>
          </div>)
        : <Loader />
    }
    </>

  )
}
