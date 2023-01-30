/* eslint-disable react/jsx-closing-tag-location */
import Link from 'next/link'
import ShortMovement from './ShortMovement'
import getMovements from 'app/services/getMovements'
import { cookies } from 'next/headers'

export default async function MovementsSection () {
  const nextCookies = cookies()
  const token = nextCookies.get('userID')
  const movements = await getMovements(token)

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex justify-between'>
        <h2 className='text-base font-bold text-white'>Ultimos Movimientos</h2>
        <Link className='text-base font-normal text-primary-100' href='/'>
          Ver Más
        </Link>
      </div>
      <ul className='flex flex-col gap-1 h-64 overflow-y-auto'>
        {movements
          ? movements.map(({ amount, date, category, type, account, description, id }) => (
            <ShortMovement key={id} amount={amount} date={date} category={category} type={type} account={account} description={description} />
          ))
          : <div className='flex flex-col items-center justify-center h-full gap-3'>
            <h2 className='text-white text-xl font-bold'>Todavia no tienes movimientos</h2>
            <p className='text-base font-semibold text-center text-primary-100'>Puedes comenzar a anotar tus movimientos aqui abajo 👇🏻</p>
          </div>}
      </ul>
    </div>
  )
}
