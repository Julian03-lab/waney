
import Link from 'next/link'
import Back from '../svgs/backbutton'

export default function BackButton () {
  return (
    <Link href='/' className=' z-10 fixed top-0 left-0 m-4 fill-black'>
      <Back width={32} height={32} stroke='#98dad8' />
    </Link>

  )
}
