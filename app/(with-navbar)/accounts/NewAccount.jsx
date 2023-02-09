'use client'

import { auth } from 'app/services/firebaseClient'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import addAccount from './addAccount'
import { getAccount } from './getAccounts'
import Modal from 'app/components/Modal'
import { Oval } from 'react-loader-spinner'
import { useRouter } from 'next/navigation'

export function NewAccountModal ({ handleCreate }) {
  const [user] = useAuthState(auth)
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [values, setValues] = useState({
    accountName: '',
    inicialAmount: ''
  })

  const handleChange = (e) => {
    let { name, value } = e.target
    if (name === 'inicialAmount') {
      value = parseInt(value)
      if (value > 999999) {
        value = 999999
      } else if (value < 0) {
        value = 0
      }
    }
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    getAccount(user.uid, values.accountName.toLowerCase()).then((doc) => {
      if (doc.exists()) {
        alert('La cuenta ya existe')
        setLoading(false)
      } else {
        addAccount(values, user.uid).then(() => {
          router.refresh()
          handleCreate()
        })
          .catch((error) => {
            console.error('Error adding document: ', error)
          })
      }
    })
  }

  return (
    <Modal>
      <div className='bg-black-secondary shadow-md px-10 py-5 rounded-xl relative flex flex-col gap-3 items-center'>
        <button onClick={handleCreate} className='absolute right-1 top-1 text-white font-bold text-3xl hover:text-primary-100'>
          <i className='bi bi-x' />
        </button>
        <h1 className='text-2xl font-bold text-white'>Nueva cuenta</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
          <div className='relative'>
            <input autoComplete='off' type='text' name='accountName' id='accountName' onChange={handleChange} value={values.accountName} className={`${values.accountName ? 'opacity-100' : 'opacity-50'} w-full pt-6 pb-2 px-2 font-semibold py text-base bg-black-primary border-2 rounded-xl text-white peer focus:opacity-100 focus:outline-none border-primary-100 focus:shadow-primary-100 focus:shadow-glow`} placeholder='Efectivo' />
            <label htmlFor='accountName' className='opacity-100 absolute text-xs font-bold top-2 left-2 text-primary-100 peer-focus:opacity-100'>Nombre de la cuenta</label>
          </div>
          <div className='relative'>
            <input min={0} max={999999} autoComplete='off' type='number' name='inicialAmount' id='inicialAmount' onChange={handleChange} value={values.inicialAmount} className={`${values.inicialAmount ? 'opacity-100' : 'opacity-50'} w-full pt-6 pb-2 px-2 font-semibold py text-base bg-black-primary border-2 rounded-xl text-white peer focus:opacity-100 focus:outline-none border-primary-100 focus:shadow-primary-100 focus:shadow-glow`} placeholder='999,999' />
            <label htmlFor='inicialAmount' className='opacity-100 absolute text-xs font-bold top-2 left-2 text-primary-100 peer-focus:opacity-100'>Cantidad inicial</label>
          </div>
          <button type='submit' disabled={loading || values.accountName.length < 1 || values.inicialAmount.length < 1} className='py-1 rounded-xl disabled:opacity-40 bg-primary-100 font-semibold text-lg text-black-primary leading-8 text-center hover:bg-gradient-to-r from-primary-100 via-primary-200 to-primary-300'>{!loading ? 'Añadir cuenta' : <Oval color='#111' height={32} width={32} />}</button>
        </form>
      </div>
    </Modal>

  )
}

export default function NewAccountButton () {
  const [open, setOpen] = useState(false)

  const handleCreate = () => {
    setOpen(!open)
  }

  return (
    <>
      <li className='rounded-xl py-3 px-4 gap-2 shadow-lg border-dotted border-[3px] border-black-secondary text-primary-100 hover:border-primary-100 cursor-pointer bg-black-secondary mb-1' onClick={handleCreate}>
        <p className='text-center font-medium text-2xl'>Agregar cuenta</p>
      </li>
      {open && <NewAccountModal handleCreate={handleCreate} />}
    </>
  )
}
