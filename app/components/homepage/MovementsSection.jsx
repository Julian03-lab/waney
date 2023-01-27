import Link from 'next/link'
import ShortMovement from './ShortMovement'

export default function MovementsSection () {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex justify-between'>
        <h2 className='text-base font-bold text-white'>Ultimos Movimientos</h2>
        <Link className='text-base font-normal text-primary-100' href='/'>
          Ver Más
        </Link>
      </div>
      <ul className='flex flex-col gap-1'>
        <ShortMovement />
        <ShortMovement />
        <ShortMovement />
        <ShortMovement />
      </ul>
    </div>
  )
}
