export default function LoginPage () {
  return (
    <div className='flex flex-col relative justify-between h-screen px-7 py-9'>
      <div className='flex justify-between text-4xl font-extrabold items-center w-full pt-8'>
        Log In
      </div>
      <form className='flex flex-col gap-8 justify-center items-center py-8'>
        <div className='flex flex-col gap-2 justify-center items-center w-full'>
          <div className='flex flex-col items-start w-full'>
            <label className='text-xl font-extrabold text-white'>Email</label>
            <input className='bg-primary-400 rounded-md px-3 py-2 font-semibold text-sm text-white w-full' type='email' placeholder='Type here...' />
          </div>
          <div className='flex flex-col items-start w-full'>
            <label className='text-xl font-extrabold text-white'>Password</label>
            <input className='bg-primary-400 rounded-md px-3 py-2 font-semibold text-sm text-white w-full' type='password' placeholder='Type here...' />
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <button className='py-[6px] px-10 flex flex-row gap-1 rounded-full w-full leading-8 place-content-center bg-secondary-100 font-extrabold text-[20px] text-black'>Log In</button>
        </div>
      </form>
    </div>
  )
}
