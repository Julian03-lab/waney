/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import EmojiList from '../EmojiList'
import { auth } from 'app/services/firebaseClient'
import Loader from 'app/components/Loader'
import addCategoryDB, { updateCategoryDB } from '../addCategoryDB'
import deleteCategoryDB from '../deleteCategoryDB'
import { getCategory } from '../getCategories'
import { useAuthState } from 'react-firebase-hooks/auth'

export default function NewCategory ({ params }) {
  const router = useRouter()
  const [category, setCategory] = useState('')
  const [icon, setIcon] = useState('❔')
  const [user] = useAuthState(auth)
  const [loading, setLoading] = useState(true)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    getCategory(user?.uid, params.category).then((doc) => {
      setCategory(doc.name)
      setIcon(doc.icon)
      setLoading(false)
    }).catch(() => {
      console.log('Updating...')
    })
  }, [user])

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    updateCategoryDB(category, icon, user?.uid, params.category).then(() => {
      router.replace('/categories')
    }
    )
  }

  const handleCancel = (e) => {
    e.preventDefault()
    router.replace('/categories')
  }

  const handleIcon = (e) => {
    e.preventDefault()
    setIcon(e.target.innerText)
  }

  const handleDelete = (e) => {
    e.preventDefault()
    setLoading(true)
    deleteCategoryDB(params.category, user?.uid).then(() => {
      router.replace('/categories')
    }
    )
  }

  if (loading) { return <Loader /> }

  return (
    <div className='flex flex-col justify-between w-full gap-2 mb-8'>
      <div className={`absolute top-0 left-0 w-full h-full backdrop-blur-sm bg-black-primary bg-opacity-50 z-10 ${isOpen ? 'flex' : 'hidden'}`}>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='bg-black-secondary rounded-xl shadow-md p-7 w-4/5 flex flex-col gap-4 text-center'>
            <h2 className='text-lg font-bold text-primary-100'>¿Estas seguro de eliminar esta categoria?</h2>
            <div className='flex flex-col justify-between w-full gap-2'>
              <button onClick={handleDelete} className='py-1 rounded-xl border border-error font-bold text-base text-error w-full hover:bg-error hover:text-black-primary'>Eliminarla</button>
              <button onClick={() => setIsOpen(!isOpen)} className='py-1 rounded-xl border border-primary-100 font-bold text-base text-primary-100 w-full hover:bg-primary-100 hover:text-black-primary'>Mantenerla</button>
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleCancel} className='self-start font-bold text-primary-100 text-xl'>&larr; Volver</button>
      <form className='flex flex-col justify-around px-7 py-4 gap-4 border-2 shadow-md border-primary-100 rounded-xl items-center relative'>
        <button
          onClick={(e) => {
            e.preventDefault()
            setIsOpen(!isOpen)
          }}
          className='absolute top-3 text-3xl right-3 text-primary-100 hover:text-primary-200'
        >
          <i className='bi bi-trash' />
        </button>
        <div className=' bg-black-secondary rounded-xl text-5xl p-4 shadow'>
          {icon}
        </div>
        <div className='relative w-full'>
          <input type='text' name='category' id='category' onChange={(e) => setCategory(e.target.value)} value={category} className={`${category ? 'opacity-100' : 'opacity-50'} w-full pt-5 pb-2 px-2 font-semibold py text-base bg-black-primary border-2 border-primary-100 rounded-xl text-white peer focus:opacity-100 focus:outline-none focus:shadow-primary-100 focus:shadow-glow`} placeholder='Salario' />
          <label htmlFor='category' className='opacity-100 absolute text-xs font-bold top-2 left-2 text-primary-100 peer-focus:opacity-100'>Nuevo titulo:</label>
        </div>
        <div className='flex flex-col items-center w-full'>
          <button type='submit' disabled={!category} onClick={handleSubmit} className='py-1 rounded-xl disabled:opacity-40 bg-primary-100 font-bold text-lg text-black-primary leading-8 w-full'>Actualizar categoria</button>
        </div>
      </form>
      <div className='w-full bg-black-secondary rounded-md shadow px-2 py-1'>
        <h3 className='text-lg font-semibold text-primary-100'>Selecciona un icono</h3>
        <EmojiList handleIcon={handleIcon} />
      </div>
    </div>
  )
}
