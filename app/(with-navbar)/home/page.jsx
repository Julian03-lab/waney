import BalanceInfo from 'app/components/homepage/BalanceInfo'
import MovementsButtons from 'app/components/homepage/MovementsButtons'
import MovementsSection from 'app/components/Movements/MovementsSection'
import { Suspense } from 'react'
import { cookies } from 'next/headers'
import OptionButton from 'app/components/homepage/OptionButton'

function MovementsSectionLoader () {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex justify-between'>
        <h2 className='text-base font-bold text-white'>Ultimos Movimientos</h2>
      </div>
      <div className='flex flex-col gap-1 h-[252px] animate-pulse'>
        <div className='w-full bg-black-secondary h-14 rounded-xl' />
        <div className='w-full bg-black-secondary h-14 rounded-xl' />
        <div className='w-full bg-black-secondary h-14 rounded-xl' />
        <div className='w-full bg-black-secondary h-14 rounded-xl' />
      </div>
    </div>
  )
}

export default async function LandingPage () {
  const nextCookies = cookies()
  const token = nextCookies.get('userID')
  return (
    <>
      <div className='flex flex-col gap-2 w-full'>
        <BalanceInfo token={token} />
        <OptionButton href='accounts' icon='collection' text='Cuentas' optionStyle='px-3 py-2 w-full' />
      </div>
      <hr className='border border-primary-100 w-full' />
      <div className='flex flex-col gap-6 w-full'>
        <Suspense fallback={<MovementsSectionLoader />}>
          <MovementsSection token={token} />
        </Suspense>
      </div>
      <MovementsButtons />
    </>
  )
}
