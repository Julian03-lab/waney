import { Oval } from 'react-loader-spinner'
import Isologo from './svgs/Isologo'
import Okine from '@next/font/local'

const okine = Okine({ src: '../fonts/MADEOkineSansPERSONALUSE-Bold.otf' })

export default function Loader () {
  return (
    <div className='flex flex-col items-center justify-center gap-6 p-0 h-screen'>
      <Isologo width={200} height={200} />
      <h1 className={`${okine.className} text-6xl text-primary-100`}>WANEY</h1>
      <Oval
        color='#72F0FF' secondaryColor='#50a8b3' height={56} width={56}
      />
    </div>

  )
}
