'use client'

import { useRouter } from 'next/navigation'

export default function MovementsButtons () {
  const router = useRouter()

  const handleIngreso = () => {
    router.push('/new/income')
  }
  return (
    <div>
      <button onClick={handleIngreso}>
        Ingreso
      </button>
    </div>
  )
}
