'use client'

import { useState, useEffect } from 'react'
import Password from '../../components/Login/Password'
import { auth } from 'app/services/firebaseClient'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/navigation'

export default function RegisterAuth () {
  const [user] = useAuthState(auth)
  const [email, setEmail] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/

  const errorList = {
    'auth/email-already-in-use': 'El email ya esta en uso.',
    'auth/invalid-email': 'El email no es valido.',
    'auth/operation-not-allowed': 'No se puede crear una cuenta con este email.',
    'auth/missing-email': 'El email es requerido.'
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    if (!displayName) {
      setError('El nombre es requerido')
      return
    }
    if (!passwordRegex.test(password)) {
      setError('La contraseña debe tener al menos 8 caracteres, una mayuscula y un numero')
      return
    }
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden')
      return
    }
    return await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        updateProfile(auth.currentUser, { displayName }).then(() => {
          router.push('/home')
        })
      })
      .catch(e => {
        setError(errorList[e.code])
      })
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
    <form className='flex flex-col items-center gap-1'>
      <div className='flex flex-col gap-4 justify-center items-center w-full '>
        <div className='flex flex-col items-start w-full'>
          <label className='text-lg font-extrabold text-white' htmlFor='name'>Nombre y apellido</label>
          <input required className='bg-primary-400 rounded-full px-3 py-2 font-semibold text-base text-black-primary w-full outline-none placeholder:text-black-primary placeholder:text-opacity-50' type='text' placeholder='John Doe' id='name' value={displayName} onChange={e => setDisplayName(e.target.value)} />
        </div>
        <div className='flex flex-col items-start w-full'>
          <label className='text-lg font-extrabold text-white' htmlFor='email'>Email</label>
          <input required className='bg-primary-400 rounded-full px-3 py-2 font-semibold text-base text-black-primary w-full outline-none placeholder:text-black-primary placeholder:text-opacity-50' type='email' placeholder='example@email.xyz' id='email' onChange={e => setEmail(e.target.value)} value={email} />
        </div>
        <div className='flex flex-col items-start w-full'>
          <Password htmlFor='password' text='Contraseña' handleConfirm={handleConfirm} handlePassword={handlePassword} onChange={e => setPassword(e.target.value)} value={password} />
        </div>
        <div className='flex flex-col items-start w-full'>
          <Password htmlFor='confirmPassword' text='Confirmar contraseña' handleConfirm={handleConfirm} handlePassword={handlePassword} value={confirmPassword} />
        </div>
        <p className='self-start font-medium text-base text-error focus:font-bold'> &nbsp; {error ? '🛇 ' + error : ''}</p>
      </div>
      <div className='flex flex-col gap-4'>
        <button className='py-[6px] px-10 flex flex-row gap-1 rounded-full w-full leading-8 place-content-center bg-primary-100 font-extrabold text-[20px] text-black-primary shadow' onClick={handleRegister}>Registrarse</button>
      </div>
    </form>

  )
}
