'use client'
import Link from 'next/link'

export default function MovementsButtons () {
  return (
    <div className='flex w-full gap-2 justify-center items-center'>
      <Link href='/new/income' className='font-bold lg:text-2xl text-white py-2 px-2 flex flex-row gap-2 rounded-xl justify-evenly items-center bg-black-primary shadow-income active:shadow-none active:translate-x-1 active:translate-y-1 border-2 border-success w-full'>
        Anotar ingreso
      </Link>
      <Link href='/new/expense' className='font-bold lg:text-2xl text-white py-2 px-2 flex flex-row gap-2 rounded-xl justify-evenly items-center bg-black-primary shadow-expense active:shadow-none active:translate-x-1 active:translate-y-1 border-2 border-error w-full'>
        Anotar gasto
      </Link>
    </div>
  )
}
