import BackButton from 'app/components/Login/BackButton'
import GoogleLogin from 'app/components/Login/GoogleLogin'
import Password from 'app/components/Login/Password'
import Link from 'next/link'

export default function LoginPage () {
  return (
    <>
      <BackButton />
      <div>
        <h3 className='text-lg text-white font-semibold'>Que bueno verte de vuelta!</h3>
        <h2 className='text-2xl text-secondary-100 font-extrabold'>Inicia sesión y comienza a manejar tus finanzas.</h2>
      </div>
      <main className='flex flex-col justify-center gap-4'>
        <GoogleLogin />
        <div className='flex items-center gap-2 w-full'>
          <div className='border-secondary-100 h-0 border-2 w-full' />
          <h3 className='font-bold text-sm text-secondary-100'>O</h3>
          <div className='border-secondary-100 h-0 border-2 w-full' />
        </div>
        <form className='flex flex-col items-center gap-4'>
          <div className='flex flex-col gap-4 justify-center items-center w-full'>
            <div className='flex flex-col items-start w-full'>
              <label className='text-xl font-extrabold text-white' htmlFor='email'>Email</label>
              <input className='bg-primary-400 rounded-full px-3 py-2 font-medium text-base text-white w-full outline-none' type='email' placeholder='Type here...' id='email' />
            </div>
            <div className='flex flex-col items-start w-full'>
              <Password htmlFor='password' text='Contraseña' />
            </div>
          </div>
          <Link href='/forgot-password' className='self-end font-extrabold text-sm text-white hover:text-secondary-100 hover:underline'>
            ¿Olvidaste tu contraseña?
          </Link>
          <div className='flex flex-col gap-4'>
            <button className='py-[6px] px-10 flex flex-row gap-1 rounded-full w-full leading-8 place-content-center bg-secondary-100 font-extrabold text-[20px] text-black shadow'>Inicia sesión</button>
          </div>
        </form>
        <div className='flex flex-col items-center'>
          <h3 className='text-sm font-semibold text-white'>No tienes una cuenta?</h3>
          <Link href='/register' className='text-secondary-100 font-extrabold text-sm'>
            Registrate ahora
          </Link>
        </div>
      </main>
    </>
  )
}
