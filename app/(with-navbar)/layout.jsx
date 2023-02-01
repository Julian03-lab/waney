import BottomNav from 'app/components/NavBar/BottomNav'
import NavBar from 'app/components/NavBar/NavBar'

export default function AppLayout ({ children }) {
  return (
    <>
      <NavBar />
      <main className='flex flex-col items-center justify-evenly bg-black-primary h-screen py-20 w-full px-9'>
        {children}
      </main>
      <BottomNav />
    </>
  )
}
