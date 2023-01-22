import BackButton from 'app/components/Login/BackButton'
import GoogleLogin from 'app/components/Login/GoogleLogin'
import Link from 'next/link'
import LoginAuth from './LoginAuth'

export default function LoginPage () {
  return (
    <>
      <BackButton />
      <div>
        <h3 className='text-lg text-white font-semibold'>Que bueno verte de vuelta!</h3>
        <h2 className='text-2xl text-primary-100 font-extrabold'>Inicia sesión y comienza a manejar tus finanzas.</h2>
      </div>
      <main className='flex flex-col justify-center gap-4'>
        <GoogleLogin />
        <div className='flex items-center gap-2 w-full'>
          <div className='border-primary-100 h-0 border-2 w-full' />
          <h3 className='font-bold text-sm text-primary-100'>O</h3>
          <div className='border-primary-100 h-0 border-2 w-full' />
        </div>
        <LoginAuth />
        <div className='flex flex-col items-center'>
          <h3 className='text-sm font-semibold text-white'>No tienes una cuenta?</h3>
          <Link href='/register' className='text-primary-100 font-extrabold text-sm'>
            Registrate ahora
          </Link>
        </div>
      </main>
    </>
  )
}
