import Image from 'next/image'
import isoLogo from 'public/waney-isologo.png'
import LoginButtons from './components/Login/LoginButtons'

export default function LandingPage () {
  return (
    <main>
      <div className='flex flex-col items-center justify-between px-7 py-9 h-screen'>
        <div className='flex flex-col items-center content-center gap-8 p-0'>
          <Image src={isoLogo} width={168} height={168} alt='waney logo' />
          <div className='flex flex-col items-center content-center gap-2 text-center'>
            <h1 className='font-extrabold text-5xl text-primary-100'>Waney</h1>
            <h2 className='font-semibold text-2xl text-primary-100'>A simple way to manage your finances</h2>
          </div>
        </div>
        <div className='flex flex-col content-center items-center gap-3 bg-black'>
          <LoginButtons />
        </div>
      </div>
    </main>
  )
}
