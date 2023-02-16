'use client'
import { useState } from 'react'
import 'styles/movements.css'
import { auth } from 'app/services/firebaseClient'
import { useAuthState } from 'react-firebase-hooks/auth'
import addNewGoal from '../addGoal'
import { useRouter } from 'next/navigation'
import EmojiList from 'app/components/EmojiList'

export default function NewGoal () {
  const todayDate = new Date().toISOString().split('T')[0]

  const [values, setValues] = useState({
    goalName: '',
    limitDate: '',
    note: '',
    moneyGoal: '',
    emoji: ''
  })
  const [user] = useAuthState(auth)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleIcon = (e) => {
    e.preventDefault()
    setValues({
      ...values,
      emoji: e.target.innerText
    })
  }

  const handleChanges = (field, value) => {
    setValues({
      ...values,
      [field]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    addNewGoal(values, user.uid).then(() => {
      router.replace('/goals')
    }
    )
  }

  return (
    <>
      {(values.goalName || values.moneyGoal || values.emoji) && (
        <div className=' text-white bg-black-secondary rounded-xl py-3 px-4 shadow flex justify-start w-full items-center gap-4'>
          <div className='text-5xl'>
            {values.emoji}
          </div>
          <div className=' flex flex-col gap-1 text-xl break-all text-primary-100 font-bold items-start'>
            Objetivo:
            <span className='text-white font-medium'>{values.goalName}</span>
            Dinero:
            <span className='text-white font-medium'>{Number.isNaN(values.moneyGoal) ? '0.0' : values.moneyGoal.toLocaleString('es-MX')}</span>
          </div>
        </div>
      )}
      <form className='flex flex-col gap-1' onSubmit={handleSubmit} autoComplete='off'>
        <div className='relative'>
          <input required type='text' name='goalName' id='goalName' min={todayDate} onChange={(e) => handleChanges(e.target.name, e.target.value)} value={values.goalName} className={`${values.goalName ? 'opacity-100' : 'opacity-50'} pt-6 pb-2 px-2 font-semibold py text-base bg-black-primary border-2 border-primary-100 rounded-xl text-white peer focus:opacity-100 focus:outline-none focus:shadow-primary-100 focus:shadow-glow w-full calendar`} placeholder='Nuevo departamento' />
          <label htmlFor='goalName' className='opacity-100 absolute text-xs font-bold top-2 left-2 text-primary-100 peer-focus:opacity-100'>Nombre del objetivo</label>
        </div>
        <div className='relative'>
          <input required type='date' name='limitDate' id='limitDate' min={todayDate} onChange={(e) => handleChanges(e.target.name, e.target.value)} value={values.limitDate} className={`${values.limitDate ? 'opacity-100' : 'opacity-50'} pt-6 pb-2 px-2 font-semibold py text-base bg-black-primary border-2 border-primary-100 rounded-xl text-white peer focus:opacity-100 focus:outline-none focus:shadow-primary-100 focus:shadow-glow w-full calendar`} placeholder='31/12/2023' />
          <label htmlFor='limitDate' className='opacity-100 absolute text-xs font-bold top-2 left-2 text-primary-100 peer-focus:opacity-100'>Fecha limite</label>
        </div>
        <div className='relative'>
          <input required type='number' name='moneyGoal' id='moneyGoal' min={0} onChange={(e) => handleChanges(e.target.name, parseInt(e.target.value))} value={values.moneyGoal} className={`${values.moneyGoal ? 'opacity-100' : 'opacity-50'} pt-6 pb-2 px-2 font-semibold py text-base bg-black-primary border-2 border-primary-100 rounded-xl text-white peer focus:opacity-100 focus:outline-none focus:shadow-primary-100 focus:shadow-glow w-full calendar`} placeholder='30,000$' max={99999999} />
          <label htmlFor='moneyGoal' className='opacity-100 absolute text-xs font-bold top-2 left-2 text-primary-100 peer-focus:opacity-100'>Objetivo de dinero</label>
        </div>
        <div className='relative'>
          <textarea name='note' id='note' cols='30' rows='5' onChange={(e) => handleChanges(e.target.name, e.target.value)} value={values.note} className={`${values.note ? 'opacity-100' : 'opacity-50'} pt-6 pb-2 px-2 font-semibold py text-base bg-black-primary border-2 border-primary-100 rounded-xl text-white peer focus:opacity-100 focus:outline-none focus:shadow-primary-100 resize-none focus:shadow-glow w-full calendar`} placeholder='Nuevo departamento para mudarme con mi familia' />
          <label htmlFor='note' className='opacity-100 absolute text-xs font-bold top-2 left-2 text-primary-100 peer-focus:opacity-100'>Nota del objetivo (Opcional)</label>
        </div>
        <div className='w-full bg-black-secondary rounded-md shadow p-2'>
          <EmojiList handleIcon={handleIcon} />
        </div>
        <button className='text-black-primary font-bold text-lg py-2 w-full bg-gradient-to-br from-primary-100 via-primary-200 to-primary-300 rounded-xl shadow'>
          {!loading ? 'Añadir objetivo' : 'Añadiendo objetivo...'}
        </button>
      </form>
    </>
  )
}
