'use client'

import { useState, useEffect } from 'react'
import Password from './Password'
import { auth } from 'app/services/firebaseClient'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/navigation'

export default function RegisterAuth () {
  const [user] = useAuthState(auth)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleRegister = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden')
      return
    }
    return await createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result.user)
      })
      .catch(e => console.log(e))
  }

  const handleConfirm = (e) => {
    setConfirmPassword(e.target.value)
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
      <div className='flex flex-col gap-4 justify-center items-center w-full '>
        <h1 className='text-white'>{error}</h1>
        <div className='flex flex-col items-start w-full'>
          <label className='text-xl font-extrabold text-white' htmlFor='username'>Usuario</label>
          <input className='bg-primary-400 rounded-full px-3 py-2 font-semibold text-base text-black w-full outline-none placeholder:text-black placeholder:text-opacity-50' type='text' placeholder='Type here...' id='username' />
        </div>
        <div className='flex flex-col items-start w-full'>
          <label className='text-xl font-extrabold text-white' htmlFor='email'>Email</label>
          <input className='bg-primary-400 rounded-full px-3 py-2 font-semibold text-base text-black w-full outline-none placeholder:text-black placeholder:text-opacity-50' type='email' placeholder='Type here...' id='email' onChange={e => setEmail(e.target.value)} value={email} />
        </div>
        <div className='flex flex-col items-start w-full'>
          <Password htmlFor='password' text='Contraseña' handleConfirm={handleConfirm} handlePassword={handlePassword} onChange={e => setPassword(e.target.value)} value={password} />
        </div>
        <div className='flex flex-col items-start w-full'>
          <Password htmlFor='confirmPassword' text='Confirmar contraseña' handleConfirm={handleConfirm} handlePassword={handlePassword} value={confirmPassword} />
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <button className='py-[6px] px-10 flex flex-row gap-1 rounded-full w-full leading-8 place-content-center bg-primary-100 font-extrabold text-[20px] text-black shadow' onClick={handleRegister}>Registrarse</button>
      </div>
    </form>

  )
}
