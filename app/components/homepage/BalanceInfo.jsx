import getBalance from '../balance/getBalance'
import OptionButton from './OptionButton'

export default async function BalanceInfo ({ token }) {
  const balance = await getBalance(token)
  return (
    <div className='flex flex-col justify-between px-5 py-4 lg:py-4 lg:px-5 items-center bg-gradient-to-br from-primary-100 via-primary-200 to-primary-300 rounded-xl gap-4'>
      <div className='flex flex-col w-full items-center'>
        <h3 className='text-xl lg:text-2xl font-semibold'>Balance total</h3>
        <div className='flex items-center gap-1'>
          <span className='text-3xl lg:text-6xl font-extrabold'>{balance ? balance.toLocaleString('es-MX') + '.00' : '0.00'}
          </span>
          <span className='text-black-primary font-extrabold text-base lg:text-lg'>ARS</span>
        </div>
      </div>
      <OptionButton href='accounts' icon='collection' text='Todas las cuentas' optionStyle='px-3 py-2 w-full' />
    </div>
  )
}
