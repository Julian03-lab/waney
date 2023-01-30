'use client'

import { useState, useEffect } from 'react'
import Password from '../../components/Login/Password'
import { auth } from 'app/services/firebaseClient'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useCookies } from 'react-cookie'

export default function LoginAuth () {
  const [user] = useAuthState(auth)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()
  const [cookie, setCookie] = useCookies(['userID'])

  const errorList = {
    'auth/invalid-email': 'El email no es valido.',
    'auth/wrong-password': 'La contraseña es incorrecta.'

  }

  const handleLogin = async (e) => {
    e.preventDefault()
    return await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setCookie('userID', auth.currentUser.uid, { path: '/' })
        router.push('/home')
      })
      .catch(e => {
        console.log(e.code)
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

  return (
    <form className='flex flex-col items-center gap-4'>
      <div className='flex flex-col gap-4 justify-center items-center w-full'>
        <div className='flex flex-col items-start w-full'>
          <label className='text-xl font-extrabold text-white' htmlFor='email'>Email</label>
          <input className='bg-primary-400 rounded-full px-3 py-2 font-semibold text-base text-black-primary w-full outline-none placeholder:text-black-primary placeholder:text-opacity-50' type='email' placeholder='example@email.xyz' id='email' onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='flex flex-col w-full'>
          <Password htmlFor='password' text='Contraseña' handlePassword={handlePassword} />
        </div>
      </div>
      <Link href='/forgot-password' className='self-end font-extrabold text-sm text-white hover:text-primary-100 hover:underline'>
        ¿Olvidaste tu contraseña?
      </Link>
      <div className='flex flex-col gap-4'>
        <button className='py-[6px] px-10 flex flex-row gap-1 rounded-full w-full leading-8 place-content-center bg-primary-100 font-extrabold text-[20px] text-black-primary shadow' onClick={handleLogin}>Inicia sesión</button>
      </div>
    </form>

  )
}
