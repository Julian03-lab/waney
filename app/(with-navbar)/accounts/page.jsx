import { cookies } from 'next/headers'
import { getAllAccounts } from './getAccounts'
import Link from 'next/link'
import NewAccountButton from './NewAccount'

function Account ({ accountName, amount, inicialAmount }) {
  return (
    <li className='rounded-xl flex items-center justify-between py-3 px-4 gap-2 shadow bg-gradient-to-br from-primary-100 via-primary-200 to-primary-300'>
      <p className='font-bold text-lg text-black-primary max-w-[120px] truncate'>{accountName}</p>
      <div className='flex gap-1 items-center'>
        <p className=' font-extrabold text-xl'>{amount !== undefined ? amount.toLocaleString('es-MX') + '.0' : inicialAmount.toLocaleString('es-MX') + '.0'}</p>
        <p className='font-extrabold text-xs uppercase'>ars</p>
      </div>
    </li>
  )
}

export default async function Accounts () {
  const nextCookies = cookies()
  const token = nextCookies.get('userID')
  const accounts = await getAllAccounts(token.value)
  return (
    <div className='flex flex-col py-4 w-full gap-6 h-full'>
      <div className='flex justify-between items-center'>
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
    </div>
  )
}
