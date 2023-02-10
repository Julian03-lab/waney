'use client'

import GoogleLogin from './GoogleLogin'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from 'app/services/firebaseClient'
import { ThreeDots } from 'react-loader-spinner'
import FacebookLogin from './FacebookLogin'
import { useRouter } from 'next/navigation'
import { useCookies } from 'react-cookie'
import { useEffect } from 'react'
import { defaultCategories } from 'app/(with-navbar)/categories/addCategoryDB'

export function Button ({ action, text, icon, disabled }) {
  return (
    <button disabled={disabled} className='box-s font-bold lg:text-2xl text-xl text-white py-2 px-2 flex flex-row gap-2 rounded-xl justify-evenly items-center bg-gradient-to-br from-primary-100 via-primary-200 to-primary-300 shadow-button active:shadow-none active:translate-x-1 active:translate-y-1 border-2 border-white w-full' onClick={action}>
      {icon && <div className='p-1 bg-white rounded-full'>{icon}</div>}
      {text}
    </button>

  )
}

export default function LoginButtons () {
  const [user, loading] = useAuthState(auth)
  const router = useRouter()
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies(['userID'])

  useEffect(() => {
    if (user) {
      defaultCategories(user.uid)
      setCookie('userID', auth.currentUser.uid, { path: '/' })
      router.replace('/home')
    }
  }, [user])

  if (user || loading) {
    return (
      <div className='flex flex-col justify-center items-center w-full'>
        <ThreeDots color='#45ADFF' height={50} width={50} timeout={3000} />
        <p className='text-xl font-bold text-white'>{user ? 'Entrando a tu cuenta' : 'Verificando datos'}</p>
      </div>
    )
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center gap-2 w-full'>
        <GoogleLogin />
        <FacebookLogin />
      </div>
    </>
  )
}
