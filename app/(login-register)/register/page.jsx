import BackButton from 'app/components/Login/BackButton'
import Link from 'next/link'

export default function RegisterPage () {
  return (
    <>
      <BackButton />
      <div>
        <h3 className='text-lg text-white font-semibold'>Toma el primer paso para manejar tus finanzas.</h3>
        <h2 className='text-2xl text-secondary-100 font-extrabold'>Registrate para empezar</h2>
      </div>
      <main className='flex flex-col justify-center gap-4'>
        <form className='flex flex-col items-center gap-4'>
          <div className='flex flex-col gap-4 justify-center items-center w-full'>
            <div className='flex flex-col items-start w-full'>
              <label className='text-xl font-extrabold text-white' htmlFor='username'>Usuario</label>
              <input className='bg-primary-400 rounded-full px-3 py-2 font-medium text-base text-white w-full outline-none' type='text' placeholder='Type here...' id='username' />
            </div>
            <div className='flex flex-col items-start w-full'>
              <label className='text-xl font-extrabold text-white' htmlFor='email'>Email</label>
              <input className='bg-primary-400 rounded-full px-3 py-2 font-medium text-base text-white w-full outline-none' type='email' placeholder='Type here...' id='email' />
            </div>
            <div className='flex flex-col items-start w-full'>
              <label className='text-xl font-extrabold text-white' htmlFor='password'>Contraseña</label>
              <div className='flex items-center bg-primary-400 px-3 py-2 rounded-full w-full'>
                <input className='bg-primary-400 font-medium text-sm text-white w-full outline-none ' type='password' placeholder='Type here...' id='password' />
                <div className='w-6 h-6 bg-white' />
              </div>
            </div>
            <div className='flex flex-col items-start w-full'>
              <label className='text-xl font-extrabold text-white' htmlFor='confirmPassword'> Confirmar contraseña</label>
              <div className='flex items-center bg-primary-400 px-3 py-2 rounded-full w-full'>
                <input className='bg-primary-400 font-medium text-sm text-white w-full outline-none ' type='password' placeholder='Type here...' id='confirmPassword' />
                <div className='w-6 h-6 bg-white' />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <button className='py-[6px] px-10 flex flex-row gap-1 rounded-full w-full leading-8 place-content-center bg-secondary-100 font-extrabold text-[20px] text-black shadow'>Registrarse</button>
          </div>
        </form>
        <div className='flex flex-col items-center'>
          <h3 className='text-sm font-semibold text-white'>Ya tienes una cuenta?</h3>
          <Link href='/login' className='text-secondary-100 font-extrabold text-sm'>
            Inicia sesión
          </Link>
        </div>
      </main>
    </>
  )
}
