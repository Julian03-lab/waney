import { cookies } from 'next/headers'
import Link from 'next/link'
import getGoals from './getGoals'

function SingleGoal ({ goalName, note, actualAmount, moneyGoal, limitDate, id }) {
  return (
    <article className='justify-between h-full flex flex-col bg-black-secondary rounded-xl py-4 px-5 flex-1 items-start gap-3'>
      <div className='flex flex-col gap-0.5 w-full'>
        <h1 className='text-primary-100 font-extrabold text-2xl w-full'>{goalName}</h1>
        <div className='w-full'>
          <p className='text-white font-bold'>{actualAmount?.toLocaleString('es-MX') || '0'} / {moneyGoal.toLocaleString('es-MX')} ARS</p>
          <progress className='w-full' value={actualAmount} max={moneyGoal} />
        </div>
        <div className='flex text-primary-100 gap-1 font-semibold'>
          Fecha limite:
          <time dateTime={limitDate} className='text-white font-bold'>{limitDate.split('-').reverse().join('/')}</time>
        </div>
        {note && (
          <div className='flex flex-col text-primary-100 gap-0.5 font-semibold'>
            Nota:
            <p className='text-white font-bold'>{note}</p>
          </div>
        )}
      </div>

      <Link href={`/goals/${id}`} className='justify-items-end text-white font-bold text-base py-2 px-3 border border-primary-100 rounded-xl'>
        Ver objetivo
      </Link>
    </article>
  )
}

export default async function Page () {
  const nextCookies = cookies()
  const token = nextCookies.get('userID')
  const goals = await getGoals(token.value)

  return (
    <div className='col-span-1 lg:col-span-2 flex flex-col gap-3'>
      <Link href='/goals/new' className='font-semibold text-2xl text-primary-100 py-2 px-2 flex flex-row gap-2 rounded-xl justify-evenly items-center bg-black-primary hover:bg-black-secondary shadow-button active:shadow-none active:translate-x-1 active:translate-y-1 border-2 border-primary-100 w-full'>
        Nuevo objetivo
      </Link>
      <ul className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
        {goals && goals.map((goal) => (
          <li key={goal.id}>
            <SingleGoal {...goal} />
          </li>
        ))}
      </ul>
    </div>
  )
}
