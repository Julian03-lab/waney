import NavBar from 'app/components/NavBar/NavBar'

export default function AppLayout ({ children }) {
  return (
    <body className='bg-black-primary lg:px-20 lg:flex overflow-y-hidden'>
      <NavBar />
      <main className='flex flex-col items-center justify-evenly bg-black-primary h-screen py-20 lg:py-11 w-full px-9'>
        {children}
      </main>
    </body>

  )
}
