import BackButton from 'app/components/Login/BackButton'
import LoginAuth from './LoginAuth'

export default function LoginPage () {
  return (
    <>
      <BackButton />
      <div>
        <h3 className='text-2xl text-white font-semibold'>Que bueno verte de vuelta!</h3>
        <h2 className='text-3xl text-primary-100 font-extrabold'>Inicia sesión y comienza a manejar tus finanzas.</h2>
      </div>
      <main className='flex flex-col justify-center gap-6'>
        <LoginAuth />
      </main>
    </>
  )
}
