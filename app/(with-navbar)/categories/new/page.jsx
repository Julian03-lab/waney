'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { auth } from 'app/services/firebaseClient'
import Loader from 'app/components/Loader'
import addCategoryDB from '../addCategoryDB'
import EmojiList from '../EmojiList'

export default function NewCategory () {
  const router = useRouter()
  const [category, setCategory] = useState('')
  const [icon, setIcon] = useState('❔')
  const uid = auth.currentUser?.uid
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    addCategoryDB(category, icon, uid).then(() => {
      router.push('/categories')
    }
    )
  }

  const handleCancel = (e) => {
    e.preventDefault()
    router.push('/categories')
  }

  const handleIcon = (e) => {
    e.preventDefault()
    setIcon(e.target.innerText)
  }

  if (loading) { return <Loader /> }

  return (
    <div className='flex flex-col justify-between w-full gap-2 mb-8'>
      <button onClick={handleCancel} className='self-start font-bold text-primary-100 text-xl'>&larr; Volver</button>
      <form className='flex flex-col justify-around px-7 py-4 gap-4 border-2 shadow-md border-primary-100 rounded-xl items-center'>
        <div className=' bg-black-secondary rounded-xl text-5xl p-4 shadow'>
          {icon}
        </div>
        <div className='relative w-full'>
          <input type='text' name='category' id='category' onChange={(e) => setCategory(e.target.value)} value={category} className={`${category ? 'opacity-100' : 'opacity-50'} w-full pt-5 pb-2 px-2 font-semibold py text-base bg-black-primary border-2 border-primary-100 rounded-xl text-white peer focus:opacity-100 focus:outline-none focus:shadow-primary-100 focus:shadow-glow`} placeholder='Salario' />
          <label htmlFor='category' className='opacity-100 absolute text-xs font-bold top-2 left-2 text-primary-100 peer-focus:opacity-100'>Nueva categoria:</label>
        </div>
        <div className='flex flex-col items-center w-full'>
          <button type='submit' disabled={!category} onClick={handleSubmit} className='py-1 rounded-xl disabled:opacity-40 bg-primary-100 font-bold text-lg text-black-primary leading-8 w-full'>Añadir categoria</button>
        </div>
      </form>
      <div className='w-full bg-black-secondary rounded-md shadow px-2 py-1'>
        <h3 className='text-lg font-semibold text-primary-100'>Selecciona un icono</h3>
        <EmojiList handleIcon={handleIcon} />
      </div>
    </div>
  )
}
