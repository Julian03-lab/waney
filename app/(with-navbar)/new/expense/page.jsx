/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import getCategories from 'app/(with-navbar)/categories/getCategories'
import Loader from 'app/components/Loader'
import useMovement from 'app/components/balance/useMovement'
import { auth } from 'app/services/firebaseClient'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import 'styles/movements.css'

export default function Expense () {
  const [values, setValues] = useState({
    amount: { value: '', status: undefined },
    description: { value: '', status: undefined },
    date: { value: '', status: undefined },
    category: { value: '', status: undefined },
    account: { value: '', status: undefined },
    type: { value: 'expense', status: undefined }
  })
  const [categories, setCategories] = useState([])
  const [handleSubmit, loading] = useMovement(values)
  const [valid, setValid] = useState(false)
  const router = useRouter()
  const [user] = useAuthState(auth)

  const validate = () => {
    const emptys = Object.values(values).filter((value) => value.value === '')
    if (emptys.length === 0) {
      setValid(true)
    }
  }

  useEffect(() => {
    validate()
  }, [values])

  useEffect(() => {
    console.log('user', user)
    getCategories(user?.uid).then((doc) => {
      setCategories(doc)
    }).catch(() => {
      console.log('Updating...')
    })
  }, [user])

  const handleChanges = (field, value) => {
    if (field === 'amount') {
      if (value > 999999) {
        value = 999999
      } else if (value < 0) {
        value = 0
      }
    }
    setValues({
      ...values,
      [field]: {
        value,
        status: undefined
      }
    })
  }

  const handleCancel = (e) => {
    e.preventDefault()
    router.replace('/home')
  }

  if (loading || !categories) { return <Loader /> }

  return (
    <form className='flex flex-col justify-center gap-4 w-full'>
      <div className='relative'>
        <input type='number' name='amount' id='amount' onChange={(e) => handleChanges(e.target.name, parseInt(e.target.value))} value={values.amount.value} className={`${values.amount.value ? 'opacity-100' : 'opacity-50'} w-full pt-6 pb-2 px-2 font-semibold py text-base bg-black-primary border-2 rounded-xl text-white peer focus:opacity-100 focus:outline-none border-primary-100 focus:shadow-primary-100 focus:shadow-glow`} min={0} max={999999} placeholder='999.999' />
        <label htmlFor='amount' className='opacity-100 absolute text-xs font-bold top-2 left-2 text-primary-100 peer-focus:opacity-100'>Cantidad</label>
      </div>
      <div className='relative'>
        <input type='text' name='description' id='description' onChange={(e) => handleChanges(e.target.name, e.target.value)} value={values.description.value} className={`${values.description.value ? 'opacity-100' : 'opacity-50'} pt-6 pb-2 px-2 font-semibold py text-base bg-black-primary border-2 border-primary-100 rounded-xl text-white peer focus:opacity-100 focus:outline-none focus:shadow-primary-100 focus:shadow-glow w-full`} placeholder='Sueldo' />
        <label htmlFor='description' className='opacity-100 absolute text-xs font-bold top-2 left-2 text-primary-100 peer-focus:opacity-100'>Descripción</label>
      </div>
      <div className='relative'>
        <input type='date' name='date' id='date' onChange={(e) => handleChanges(e.target.name, e.target.value)} value={values.date.value} className={`${values.date.value ? 'opacity-100' : 'opacity-50'} pt-6 pb-2 px-2 font-semibold py text-base bg-black-primary border-2 border-primary-100 rounded-xl text-white peer focus:opacity-100 focus:outline-none focus:shadow-primary-100 focus:shadow-glow w-full calendar`} placeholder='Sueldo' />
        <label htmlFor='date' className='opacity-100 absolute text-xs font-bold top-2 left-2 text-primary-100 peer-focus:opacity-100'>Fecha del movimiento</label>
      </div>
      <div className='relative w-full'>
        <select name='category' id='category' onChange={(e) => handleChanges(e.target.name, e.target.value)} value={values.category.value} className={`${values.category.value ? 'opacity-100' : 'opacity-50'} pt-6 pb-2 px-2 font-semibold py text-base bg-black-primary border-2 border-primary-100 rounded-xl text-white peer focus:opacity-100 focus:outline-none focus:shadow-primary-100 focus:shadow-glow w-full calendar`}>
          <option value='' disabled>Seleccione una categoría</option>
          {categories.map(({ name, icon, id }) => <option key={id} value={icon}>{name}</option>)}
        </select>
        <label htmlFor='category' className='opacity-100 absolute text-xs font-bold top-2 left-2 text-primary-100 peer-focus:opacity-100'>Categoría</label>
      </div>
      <div className='relative w-full'>
        <select name='account' id='account' onChange={(e) => handleChanges(e.target.name, e.target.value)} value={values.account.value} className={`${values.account.value ? 'opacity-100' : 'opacity-50'} pt-6 pb-2 px-2 font-semibold py text-base bg-black-primary border-2 border-primary-100 rounded-xl text-white peer focus:opacity-100 focus:outline-none focus:shadow-primary-100 focus:shadow-glow w-full calendar`}>
          <option value='' disabled>Seleccione una cuenta</option>
          <option value='MercadoPago'>MercadoPago</option>
          <option value='LemonCash'>LemonCash</option>
          <option value='other'>Otro</option>
        </select>
        <label htmlFor='account' className='opacity-100 absolute text-xs font-bold top-2 left-2 text-primary-100 peer-focus:opacity-100'>Cuenta</label>
      </div>
      <button disabled={!valid} type='submit' className='py-2 px-3 rounded-xl disabled:opacity-40 bg-primary-100 font-bold text-xl text-black-primary leading-8' onClick={(e) => handleSubmit(e)}>Agregar movimiento</button>
      <button type='submit' className='self-center font-bold text-lg text-primary-100 ' onClick={handleCancel}>Cancelar</button>
    </form>

  )
}
