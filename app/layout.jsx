import 'styles/globals.css'
import { Nunito } from '@next/font/google'
import Image from 'next/image'
import isoLogo from 'public/waney-isologo.png'

const nunito = Nunito({
  weight: ['300', '400', '600', '700', '800', '900']
})

export default function RootLayout ({ children }) {
  return (
    <html className={nunito.className}>
      <head />
      <body className='bg-black'>
        <main>
          <div className='flex flex-col items-center justify-around px-9 py-12 h-screen'>
            <div className='flex flex-col items-center content-center gap-8 p-0'>
              <Image src={isoLogo} width={200} height={200} alt='waney logo' />
              <div className='flex flex-col items-center content-center gap-2 text-center'>
                <h1 className='font-extrabold text-7xl text-secondary-100'>Waney</h1>
                <h2 className='font-medium text-2xl text-secondary-100'>Always in control of your finances</h2>
              </div>
            </div>
            {children}
          </div>
        </main>

      </body>
    </html>
  )
}
