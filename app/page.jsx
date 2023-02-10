import LoginButtons from './components/Login/LoginButtons'
import Isologo from './components/svgs/Isologo'
import Okine from '@next/font/local'

const okine = Okine({ src: '/fonts/MADEOkineSansPERSONALUSE-Bold.otf' })

export default function LandingPage () {
  return (
    <body className='bg-black-primary flex justify-center'>
      <main className='bg-black-primary flex flex-col justify-around px-9 pt-0 pb-12 h-screen max-w-lg'>
        <div className='flex flex-col items-center content-center gap-6 p-0'>
          <Isologo width={200} height={200} />
          <div className='flex flex-col items-center content-center gap-1 text-center'>
            <h1 className={`${okine.className} text-6xl text-primary-100`}>WANEY</h1>
            <h2 className='font-medium text-2xl text-primary-100'>Mantén tus finanzas en control.</h2>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='w-full bg-primary-100 h-1' />
          <LoginButtons />
        </div>
      </main>
    </body>
  )
}
