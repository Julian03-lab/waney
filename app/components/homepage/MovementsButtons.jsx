'use client'

import { useRouter } from 'next/navigation'

export default function MovementsButtons () {
  const router = useRouter()

  const handleIngreso = () => {
    router.push('/new/income')
  }
  return (
    <div className='flex w-full gap-2 justify-center items-center'>
      <button onClick={handleIngreso} className='py-1 text-black-primary rounded-xl w-full font-bold leading-8 bg-success'>
        Ingreso
      </button>
      <button className='w-full py-1 font-bold leading-8 text-black-primary rounded-xl bg-error'>
        Egreso
      </button>
    </div>
  )
}
