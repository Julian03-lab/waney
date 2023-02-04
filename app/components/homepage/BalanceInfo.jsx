import getBalance from '../balance/getBalance'
import OptionButton from './OptionButton'

export default async function BalanceInfo () {
  const balance = await getBalance()
  return (
    <div className='flex justify-between px-4 py-3 items-center bg-primary-100 rounded-xl'>
      <div className='flex flex-col gap-1'>
        <h3 className='text-base font-semibold'>Todas las cuentas</h3>
        <div className='flex items-center gap-1'>
          <span className='text-2xl font-extrabold'>{balance.toLocaleString('es-MX')}.00</span>
          <span className='text-black-primary font-extrabold text-sm'>ARS</span>
        </div>
      </div>
      <OptionButton href='accounts' icon='cash-stack' text='Cuentas' optionStyle='px-3 py-2' />
    </div>
  )
}
