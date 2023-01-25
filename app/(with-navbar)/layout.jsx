import BottomNav from 'app/components/NavBar/BottomNav'
import NavBar from 'app/components/NavBar/NavBar'

export default function AppLayout ({ children }) {
  return (
    <>
      <div className='bg-black h-screen overflow-y-hidden'>

        <main className='flex flex-col items-center justify-between h-full '>
          <NavBar />
          {children}
          <BottomNav />
        </main>
      </div>
    </>
  )
}
