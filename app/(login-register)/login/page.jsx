import Link from 'next/link'

export default function LoginPage () {
  return (
    <div className='w-full'>
      <form className='flex flex-col gap-8 items-center my-8 '>
        <div className='flex flex-col gap-4 justify-center items-center w-full'>
          <div className='flex flex-col gap-2 items-start w-full'>
            <label className='text-xl font-extrabold text-white'>Email</label>
            <input className='bg-primary-400 rounded-md px-3 py-2 font-medium text-sm text-white w-full' type='email' placeholder='Type here...' />
          </div>
          <div className='flex flex-col gap-2 items-start w-full'>
            <label className='text-xl font-extrabold text-white'>Password</label>
            <input className='bg-primary-400 rounded-md px-3 py-2 font-medium text-sm text-white w-full' type='password' placeholder='Type here...' />
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <button className='py-[6px] px-10 flex flex-row gap-1 rounded-full w-full leading-8 place-content-center bg-secondary-100 font-extrabold text-[20px] text-black shadow'>Log In</button>
        </div>
      </form>
      <div className='flex flex-col items-center'>
        <h3 className='text-sm font-semibold text-white'>Dont have an account?</h3>
        <Link href='/register' className='text-secondary-100 font-extrabold text-sm'>
          Sign Up Now
        </Link>
      </div>
    </div>
  )
}
