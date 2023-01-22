import NavBar from 'app/components/NavBar/NavBar'

export default function AppLayout ({ children }) {
  return (
    <>
      <div className='bg-black h-screen'>
        <NavBar />
        <main className='flex flex-col items-center content-center h-full py-14 px-9'>
          {children}
        </main>
      </div>
    </>
  )
}
