'use client'

import { auth } from 'app/services/firebaseClient'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import addAccount from './addAccount'
import { getAccount } from './getAccounts'

export default function NewAccount () {
  const [user] = useAuthState(auth)
  const [values, setValues] = useState({
    accountName: '',
    amount: 0
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getAccount(user.uid, values.accountName.toLowerCase()).then((doc) => {
      if (doc.exists()) {
        alert('La cuenta ya existe')
      } else {
        addAccount(values, user.uid).then(() => {
          console.log('hecho')
        })
          .catch((error) => {
            console.error('Error adding document: ', error)
          })
      }
    })
  }

  return (
    <form className='flex flex-col gap-2 p-4 text-primary-100 bg-black-secondary'>
      <div>
        <label htmlFor='accountName'>Account Name</label>
        <input type='text' id='accountName' name='accountName' onChange={handleChange} />
      </div>
      <div>
        <label htmlFor='amount'>Inicial Amount</label>
        <input type='number' id='amount' name='amount' onChange={handleChange} />
      </div>
      <button disabled={values.accountName.trim().length === 0} type='submit' onClick={handleSubmit} className='disabled:text-error'>Add Account</button>

    </form>
  )
}
