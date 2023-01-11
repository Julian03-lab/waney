export default function LoginPage () {
  return (
    <div className='flex flex-col relative justify-between h-screen px-7 py-9'>
      <div className='flex justify-between text-4xl font-extrabold items-center w-full pt-8'>
        Log In
      </div>
      <form className='flex flex-col gap-4'>
        <div className='flex flex-col'>
          <label className='text-xl font-semibold text-secondary-100'>Email</label>
          <input className='border-2 border-primary-100 rounded-lg px-4 py-2' type='email' />
        </div>
        <div className='flex flex-col'>
          <label className='text-xl font-semibold text-secondary-100'>Password</label>
          <input className='border-2 border-primary-100 rounded-lg px-4 py-2' type='password' />
        </div>
        <div className='flex flex-col gap-4'>
          <button className='bg-primary-100 text-black font-bold text-xl px-4 py-2 rounded-lg'>Log In</button>
        </div>
      </form>
    </div>
  )
}
