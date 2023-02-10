import getBalance from '../balance/getBalance'

export default async function BalanceInfo ({ token }) {
  const balance = await getBalance(token)
  return (
    <div className='flex justify-between px-4 py-3 lg:py-4 lg:px-5 items-center bg-gradient-to-br from-primary-100 via-primary-200 to-primary-300 rounded-xl'>
      <div className='flex flex-col'>
        <h3 className='text-base lg:text-xl font-semibold'>Todas las cuentas</h3>
        <div className='flex items-center gap-1'>
          <span className='text-2xl lg:text-5xl font-extrabold'>{balance ? balance.toLocaleString('es-MX') + '.00' : '0.00'}
          </span>
          <span className='text-black-primary font-extrabold text-sm lg:text-lg'>ARS</span>
        </div>
      </div>
    </div>
  )
}
