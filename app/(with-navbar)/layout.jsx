import NavBar from 'app/components/NavBar/NavBar'

export default function AppLayout ({ children }) {
  return (
    <body className='bg-black-primary lg:px-52 lg:flex overflow-y-auto'>
      <NavBar />
      <main className='grid grid-cols-1 lg:grid-cols-3 gap-8 bg-black-primary py-20 lg:py-11 w-full px-9 lg:h-screen'>
        {children}
      </main>
    </body>

  )
}
