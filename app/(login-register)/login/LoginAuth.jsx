'use client'

import { useState, useEffect } from 'react'
import Password from '../../components/Login/Password'
import { auth } from 'app/services/firebaseClient'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useCookies } from 'react-cookie'
import { Oval } from 'react-loader-spinner'
import GoogleLogin from 'app/components/Login/GoogleLogin'

export default function LoginAuth () {
  const [user] = useAuthState(auth)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [cookie, setCookie] = useCookies(['userID'])

  const errorList = {
    'auth/invalid-email': 'El email no es valido.',
    'auth/wrong-password': 'La contraseña es incorrecta.',
    'auth/internal-error': 'Contraseña no introducida'
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    return await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setLoading(true)
        setCookie('userID', auth.currentUser.uid, { path: '/' })
        router.push('/home')
      })
      .catch(e => {
        setError(errorList[e.code])
      })
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  useEffect(() => {
    if (user) {
      router.push('/home')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  if (loading) {
    return (
      <div className='h-[22rem] flex flex-col justify-center text-white text-2xl items-center gap-4'>
        Llevandote a tu cuenta
        <Oval width={56} height={56} color='#fff' secondaryColor='#111' />
      </div>
    )
  }

  return (
    <>
      <GoogleLogin disabled={loading} />
      <div className='flex items-center gap-2 w-full'>
        <div className='border-primary-100 h-0 border-2 w-full' />
        <h3 className='font-bold text-sm text-primary-100'>O</h3>
        <div className='border-primary-100 h-0 border-2 w-full' />
      </div>
      <form className='flex flex-col gap-4'>
        <div className='flex flex-col gap-4 justify-center w-full'>
          <div className='relative w-full'>
            <input type='email' name='email' id='email' onChange={(e) => setEmail(e.target.value)} value={email} className={`${email ? 'opacity-100' : 'opacity-50'} w-full pt-6 pb-2 px-2 font-medium text-base bg-black-primary border-2 rounded-xl text-white peer focus:opacity-100 focus:font-medium autofill:!text-error focus:outline-none border-primary-100 focus:shadow-primary-100 focus:shadow-glow`} placeholder='example@email.xyz' />
            <label htmlFor='email' className='opacity-100 absolute text-sm font-bold top-2 left-2 text-primary-100'>Email</label>
          </div>
          <Password htmlFor='password' text='Contraseña' handlePassword={handlePassword} value={password} />
          <div className='text-error text-sm font-medium'>{error}</div>
        </div>
        <Link href='/forgot-password' className='self-end font-extrabold text-sm text-white hover:text-primary-100 hover:underline'>
          ¿Olvidaste tu contraseña?
        </Link>
        <div className='flex flex-col gap-4'>
          <button disabled={loading} className='py-[6px] px-10 flex flex-row gap-1 rounded-xl w-full leading-8 place-content-center bg-primary-100 font-extrabold text-[20px] text-black-primary shadow' onClick={handleLogin}>{loading ? <Oval width={32} height={32} color='#000' /> : 'Inicia sesión'}</button>
        </div>
      </form>
      <div className='flex flex-col items-center'>
        <h3 className='text-sm font-semibold text-white'>No tienes una cuenta?</h3>
        <Link href='/register' className='text-primary-100 font-extrabold text-sm'>
          Registrate ahora
        </Link>
      </div>
    </>

  )
}
