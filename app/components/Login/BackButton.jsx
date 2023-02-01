
import Link from 'next/link'
import Back from '../svgs/backbutton'
import Logo from '../svgs/Logo'

export default function BackButton () {
  return (

    <nav className='flex flex-row justify-between items-center w-full'>
      <Link href='/'>
        <Back width={32} height={32} stroke='#45ADFF' fill='#1E1E24' />
      </Link>
      <Logo className='w-32 h-full' />
    </nav>

  )
}
