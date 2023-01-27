import OptionButton from './OptionButton'

export default function BalanceInfo () {
  return (
    <div className='flex justify-between p-4 items-center bg-primary-100 rounded-xl'>
      <div className='flex flex-col gap-1'>
        <h3 className='text-base font-semibold'>Todas las cuentas</h3>
        <div className='flex items-center gap-1'>
          <span className='text-2xl font-extrabold'>1,000.00</span>
          <span className='text-black-primary font-extrabold text-sm'>ARS</span>
        </div>
      </div>
      <OptionButton icon='cash-stack' text='Cuentas' optionStyle='px-3 py-2' />
    </div>
  )
}
