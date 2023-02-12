import { getIncomeAndExpenses, getMovementsByCategories } from '../Movements/MovementsStatistics'
import Footer from './Footer'

export default async function Stadistics ({ token }) {
  const IncAndExp = await getIncomeAndExpenses(token)
  const CatStats = await getMovementsByCategories(token)
  console.log(CatStats)

  return (
    <section className='flex flex-col gap-3 justify-evenly h-full w-full'>
      <div className='flex justify-evenly w-full text-3xl font-bold items-center'>
        <i className='bi bi-clipboard-data bg-gradient-to-r from-primary-100 via-primary-200 to-primary-300 bg-clip-text text-[transparent]' />
        <h1 className=' text-white text-center'>
          Estadisticas de la semana
        </h1>
      </div>

      <>
        <article className='flex flex-col gap-2'>
          <h2 className='text-xl font-bold text-white mb-1'>Balance semanal</h2>
          <div className='flex px-4 justify-between items-center bg-black-secondary rounded-xl py-2 shadow'>
            <p className='text-xl font-bold text-white text-center'>Ingresos</p>
            <p className='text-lg text-success'>{IncAndExp ? IncAndExp.incomeTotal.toLocaleString('es-MX') + '.00' : '0.00'} ARS</p>
          </div>
          <div className='flex px-4 justify-between items-center bg-black-secondary rounded-xl py-2 shadow'>
            <p className='text-xl font-bold text-white text-center'>Gastos</p>
            <p className='text-lg text-error'>{IncAndExp ? IncAndExp.expensesTotal.toLocaleString('es-MX') + '.00' : '0.00'} ARS</p>
          </div>
          <div className='flex px-4 justify-between items-center bg-black-secondary rounded-xl py-2 shadow'>
            <p className='text-xl font-bold text-white text-center'>Total</p>
            <p className={`text-lg ${IncAndExp?.total >= 0 ? 'text-success' : 'text-error'}`}>{IncAndExp ? IncAndExp.total.toLocaleString('es-MX') + '.00' : '0.00'} ARS</p>
          </div>
        </article>
        <article>
          <div className='flex flex-col gap-2'>
            <h2 className='text-xl font-bold text-white mb-1'>Monto por categoria</h2>
            <div className='flex flex-col gap-2 h-[252px]'>
              {CatStats.map(({ icon, name, id, amount }) => {
                return (
                  <div className='grid grid-cols-2 w-full gap-4 bg-black-secondary rounded-xl py-2 shadow px-4' key={id}>
                    <div className='text-lg font-bold text-white truncate'>
                      {icon} {name}
                    </div>
                    <p className='text-lg font-bold text-white text-end'>{amount} ARS</p>
                  </div>
                )
              })}
            </div>
          </div>
        </article>
      </>

      <Footer />
    </section>
  )
}
