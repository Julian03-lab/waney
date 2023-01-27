import BalanceInfo from 'app/components/homepage/BalanceInfo'
import MovementsButtons from 'app/components/homepage/MovementsButtons'
import MovementsSection from 'app/components/homepage/MovementsSection'
import OptionsList from 'app/components/homepage/OptionsList'

export default function LandingPage () {
  return (
    <>
      <section className='flex flex-col w-full px-9 gap-5'>
        <article className='flex flex-col gap-6'>
          <BalanceInfo />
          <OptionsList />
        </article>
        <hr className='border border-primary-100' />
        <article className='flex flex-col gap-6'>
          <MovementsSection />
        </article>
        <MovementsButtons />
      </section>
    </>
  )
}
