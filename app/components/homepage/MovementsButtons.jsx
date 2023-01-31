'use client'
import Link from 'next/link'

export default function MovementsButtons () {

  
  return (
    <div className='flex w-full gap-2 justify-center items-center'>
      <Link href={'/new/income'} className='py-1 text-center text-black-primary rounded-xl w-full font-bold leading-8 bg-success'>
        Ingreso
      </Link>
      <Link href={'/new/expense'} className='w-full text-center py-1 font-bold leading-8 text-black-primary rounded-xl bg-error'>
        Egreso
      </Link >
    </div>
  )
}