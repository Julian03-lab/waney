import { getIncomeAndExpenses, getMovementsByCategories } from '../Movements/MovementsStatistics'
import Footer from './Footer'

export default async function Stadistics ({ token }) {
  const IncAndExp = await getIncomeAndExpenses(token)
  const CatStats = await getMovementsByCategories(token)

  return (
    <section className='flex flex-col gap-3 w-full lg:py-5'>
      <div className='flex justify-evenly w-full text-2xl lg:text-3xl font-bold items-center'>
        <i className='bi bi-clipboard-data bg-gradient-to-r from-primary-100 via-primary-200 to-primary-300 bg-clip-text text-[transparent]' />
        <h1 className=' text-white text-center'>
          Estadisticas de la semana
        </h1>
      </div>

      <>
        <article className='flex flex-col bg-black-secondary py-2 px-1 rounded-xl shadow items-center'>
          <h2 className='text-xl font-bold text-white mb-1'>Balance semanal</h2>
          <hr className='w-11/12 h-0.5 bg-white mb-2' />
          <div className='flex px-4 justify-between items-center py-2 w-full'>
            <p className='text-xl font-bold text-white text-center'>Ingresos</p>
            <p className='text-lg font-semibold text-success'>{IncAndExp ? IncAndExp.incomeTotal.toLocaleString('es-MX') : '0.00'} ARS</p>
          </div>
          <div className='flex px-4 justify-between items-center py-2 w-full'>
            <p className='text-xl font-bold text-white text-center'>Gastos</p>
            <p className='text-lg font-semibold text-error'>{IncAndExp ? IncAndExp.expensesTotal.toLocaleString('es-MX') : '0.00'} ARS</p>
          </div>
          <div className='flex px-4 justify-between items-center py-2 w-full'>
            <p className='text-xl font-bold text-white text-center'>Total</p>
            <p className={`text-lg font-semibold ${IncAndExp?.total >= 0 ? 'text-success' : 'text-error'}`}>{IncAndExp ? IncAndExp.total.toLocaleString('es-MX') : '0.00'} ARS</p>
          </div>
        </article>
        <article className='flex flex-col bg-black-secondary py-2 px-1 rounded-xl shadow items-center'>
          <h2 className='text-xl font-bold text-white mb-1'>Balance por categoria</h2>
          <hr className='w-11/12 h-0.5 bg-white mb-2' />
          <ul className='flex flex-col gap-2 max-h-[252px] w-full overflow-y-auto'>
            {CatStats.map(({ icon, name, id, amount }) => {
              return (
                <li className='flex w-full justify-between py-1 px-2' key={id}>
                  <div className='text-lg font-bold text-white truncate max-w-[7rem] lg:max-w-[10rem]'>
                    {icon} {name}
                  </div>
                  <p className='max-w-[8rem] lg:max-w-none text-lg font-bold text-white text-end'>{amount.toLocaleString('es-MX')} ARS</p>
                </li>
              )
            })}
          </ul>
        </article>
      </>

      <Footer />
    </section>
  )
}
