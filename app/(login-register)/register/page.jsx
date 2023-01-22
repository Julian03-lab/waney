import BackButton from 'app/components/Login/BackButton'
import RegisterAuth from 'app/(login-register)/register/RegisterAuth'
import Link from 'next/link'

export default function RegisterPage () {
  return (
    <>
      <BackButton />
      <div>
        <h3 className='text-lg text-white font-semibold'>Toma el primer paso para manejar tus finanzas.</h3>
        <h2 className='text-2xl text-primary-100 font-extrabold'>Registrate para empezar</h2>
      </div>
      <main className='flex flex-col justify-center gap-4'>
        <RegisterAuth />
        <div className='flex flex-col items-center'>
          <h3 className='text-sm font-semibold text-white'>Ya tienes una cuenta?</h3>
          <Link href='/login' className='text-primary-100 font-extrabold text-sm'>
            Inicia sesión
          </Link>
        </div>
      </main>
    </>
  )
}
