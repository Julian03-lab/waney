import BalanceInfo from 'app/components/homepage/BalanceInfo'
import MovementsButtons from 'app/components/homepage/MovementsButtons'
import MovementsSection from 'app/components/homepage/MovementsSection'
import OptionsList from 'app/components/homepage/OptionsList'
import { Suspense } from 'react'

function MovementsSectionLoader () {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex justify-between'>
        <h2 className='text-base font-bold text-white'>Ultimos Movimientos</h2>
      </div>
      <div className='flex flex-col gap-1 min-h-[252px] animate-pulse'>
        <div className='w-full bg-black-secondary h-14 rounded-xl' />
        <div className='w-full bg-black-secondary h-14 rounded-xl' />
        <div className='w-full bg-black-secondary h-14 rounded-xl' />
        <div className='w-full bg-black-secondary h-14 rounded-xl' />
      </div>
    </div>
  )
}

export default function LandingPage () {
  return (
    <section className='flex flex-col w-full px-9 gap-5'>
      <article className='flex flex-col gap-5'>
        <BalanceInfo />
        <OptionsList />
      </article>
      <hr className='border border-primary-100' />
      <article className='flex flex-col gap-6'>
        <Suspense fallback={<MovementsSectionLoader />}>
          <MovementsSection />
        </Suspense>

      </article>
      <MovementsButtons />
    </section>
  )
}
