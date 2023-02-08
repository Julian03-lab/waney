/* eslint-disable react/jsx-closing-tag-location */
import ShortMovement from 'app/components/Movements/ShortMovement'
import getMovements from 'app/services/getMovements'
import { cookies } from 'next/headers'
import separateDates from './getDates'
import Link from 'next/link'
import Image from 'next/image'
import pibe from './image-removebg-preview.png'

function NoMovement () {
  return (
    <div className='flex flex-col items-center justify-center h-full gap-4'>
      <Image src={pibe} alt='No movements' width={300} height={300} />
      <p className='text-xl font-semibold text-center text-white'>Recuerda anotar tus <Link href='/new/income' className='text-success font-bold hover:underline '>Ingresos</Link> o <Link href='/new/expense' className='text-error font-bold hover:underline'>Gastos</Link></p>
    </div>
  )
}

export default async function MovementsSection () {
  const nextCookies = cookies()
  const token = nextCookies.get('userID')
  let movements = await getMovements(token)
  if (movements) {
    movements = separateDates(movements)
  }

  return (
    <div className='flex flex-col w-full gap-4 h-full'>
      <div className='flex justify-between items-center'>
        <h1 className='text-4xl text-center font-bold text-white'>Movimientos</h1>
        <Link href='/home' className='justify-self-end'>
          <i className='bi bi-arrow-left-square text-2xl text-white hover:text-primary-100 cursor-pointer' />
        </Link>
      </div>
      <ul className='h-[100%] overflow-y-auto flex flex-col gap-2'>
        {movements
          ? (Object.keys(movements).map(key => (
              movements[key].length > 0
                ? (
                  <li key={key} className='flex flex-col gap-1'>
                    <h2 className='font-extrabold text-2xl bg-gradient-to-r bg-clip-text text-[transparent] from-primary-100 via-primary-200 to-primary-400 '>{key}</h2>
                    <ul className='flex flex-col gap-1'>
                      {movements[key].map(({ amount, date, category, type, account, description, id }) => (
                        <ShortMovement key={id} amount={amount} date={date} category={category} type={type} account={account} description={description} />
                      ))}
                    </ul>
                  </li>)
                : null
            )))
          : <NoMovement />}
      </ul>
    </div>
  )
}
