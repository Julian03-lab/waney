import { cookies } from 'next/headers'
import { getAllAccounts } from './getAccounts'
import Link from 'next/link'
import NewAccountButton from './NewAccount'
import Stadistics from 'app/components/NavBar/Stadistics'

function Account ({ accountName, amount, inicialAmount }) {
  return (
    <li className='rounded-xl flex flex-col lg:flex-row items-center justify-between py-2 xl:py-2 px-3 xl:px-6 gap-1 bg-gradient-to-br from-primary-100 via-primary-200 to-primary-300 shadow-md'>
      <h3 className='font-bold text-2xl xl:text-4xl text-black-primary max-w-full lg:w-full truncate px-2'>{accountName}</h3>
      <div className='flex lg:flex-col items-center justify-between lg:items-end w-full'>
        <h4 className='font-bold text-lg xl:text-2xl '>Saldo Actual:</h4>
        <div className='flex gap-0.5 items-center'>
          <p className=' font-extrabold text-lg xl:text-2xl'>{amount !== undefined ? amount.toLocaleString('es-MX') : inicialAmount.toLocaleString('es-MX')}</p>
          <p className='font-extrabold text-xs xl:text-base uppercase'>ars</p>
        </div>
      </div>
      {(amount !== undefined) && (
        <div className='flex lg:flex-col  items-center justify-between lg:items-end w-full'>
          <h4 className='font-bold text-lg xl:text-2xl'>Saldo Inicial:</h4>
          <div className='flex gap-0.5 items-center'>
            <p className=' font-extrabold text-lg xl:text-2xl'>{inicialAmount.toLocaleString('es-MX')}</p>
            <p className='font-extrabold text-xs uppercase xl:text-base'>ars</p>
          </div>
        </div>
      )}
    </li>
  )
}

export default async function Accounts () {
  const nextCookies = cookies()
  const token = nextCookies.get('userID')
  const accounts = await getAllAccounts(token.value)
  return (
    <>
      <section className='lg:col-span-2 flex flex-col items-center lg:justify-evenly py-2 gap-4 h-[75vh]'>
        <div className='flex justify-between items-center w-full'>
          <h1 className='text-4xl text-center font-bold text-white'>Cuentas</h1>
          <Link href='/home' className='justify-self-end'>
            <i className='bi bi-arrow-left-square text-2xl text-white hover:text-primary-100 cursor-pointer' />
          </Link>
        </div>
        <ul className='w-full flex flex-col gap-1.5 h-[90%] overflow-y-auto'>
          <NewAccountButton />
          {accounts
            ? (
                accounts.map(({ id, accountName, amount, inicialAmount }) => (
                  <Account key={id} accountName={accountName} amount={amount} inicialAmount={inicialAmount} />
                ))
              )
            : null}
        </ul>
      </section>
      <Stadistics token={token} />
    </>
  )
}
