import BackButton from 'app/components/Login/BackButton'
import Password from 'app/components/Login/Password'
import Link from 'next/link'

export default function RegisterPage () {
  return (
    <div>
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
              <Password htmlFor='password' text='Contraseña' />
            </div>
            <div className='flex flex-col items-start w-full'>
              <Password htmlFor='confirmPassword' text='Confirmar contraseña' />
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
    </div>
  )
}
