
import Link from 'next/link'

export default function Background () {
  return (
    <div className='absoloute'>
      <div className='bg-secondary-100 rounded-full z-0 top-[-13rem] left-[-7.5rem] absolute h-96 w-96' />
      <Link href='/' className='absolute z-10 text-black font-bold text-base px-7 py-9'>
        ← Back
      </Link>
    </div>

  )
}
