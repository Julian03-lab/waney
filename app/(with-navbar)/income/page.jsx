'use client'

import MakeMovement from 'app/components/balance/MakeMovement'
import { useState } from 'react'

export default function Income () {
  const [amount, setAmount] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [category, setCategory] = useState('')
  const [uid, setUid] = useState('')

  return (
    <form>
      <div>
        <label htmlFor='amount'>Monto</label>
        <input type='number' name='amount' id='amount' onChange={(e) => setAmount(e.target.value)} />
      </div>
      <div>
        <label htmlFor='description'>Descripción</label>
        <input type='text' name='description' id='description' onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label htmlFor='date'>Fecha</label>
        <input type='date' name='date' id='date' onChange={(e) => setDate(e.target.value)} />
      </div>
      <div>
        <label htmlFor='category'>Categoría</label>
        <select name='category' id='category' onChange={(e) => setCategory(e.target.value)}>
          <option value=''>Seleccione una categoría</option>
          <option value='salary'>Salario</option>
          <option value='gift'>Regalo</option>
          <option value='other'>Otro</option>
        </select>
      </div>
      <div>
        <MakeMovement amount={amount} description={description} date={date} category={category} uid={uid} type='income' />
      </div>
    </form>
  )
}
