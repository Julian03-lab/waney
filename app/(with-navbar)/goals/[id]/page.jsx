import { cookies } from 'next/headers'
import { getGoal } from '../getGoals'

export default async function page ({ params }) {
  const nextCookies = cookies()
  const token = nextCookies.get('userID')
  const { goalName, limitDate, moneyGoal, actualAmount, emoji } = await getGoal(token.value, params.id)
  const today = new Date()
  const goalDate = new Date(limitDate)
  return (
    <div className='justify-between flex flex-col items-start gap-3 py-5'>
      <div className='text-primary-100 font-extrabold text-3xl w-full flex justify-between items-center gap-1'>
        <h1>{emoji}{goalName}</h1>
        <i className='bi bi-arrow-left-circle text-primary-100 text-2xl' />
      </div>
      <div className=' w-full flex flex-col gap-2 h-96 overflow-y-auto'>
        <h3 className='text-white text-xl font-bold'>Ultimos aportes:</h3>
        <div className='h-20 w-full bg-black-secondary rounded-xl' />
        <div className='h-20 w-full bg-black-secondary rounded-xl' />
        <div className='h-20 w-full bg-black-secondary rounded-xl' />
        <div className='h-20 w-full bg-black-secondary rounded-xl' />
        <div className='h-20 w-full bg-black-secondary rounded-xl' />
      </div>

      <div className='flex flex-col w-full'>
        <div className='w-full'>
          <p className='text-white font-bold text-2xl'>{actualAmount?.toLocaleString('es-MX') || '0'} / {moneyGoal.toLocaleString('es-MX')} ARS</p>
          <progress className='w-full' value={actualAmount} max={moneyGoal} />
        </div>
        <p className='text-xl text-primary-100 font-bold'>Fecha limite:</p>
        <div className='flex text-xl text-white font-semibold items-center gap-2'>
          <time dateTime={limitDate}>{limitDate.split('-').reverse().join('/')}</time>
          <p className='text-white font-extrabold text-xl'> - </p>
          <p>Faltan <strong>{Math.floor(-1 * (today - goalDate) / (1000 * 60 * 60 * 24))}</strong> dias</p>
        </div>
      </div>
    </div>
  )
}
