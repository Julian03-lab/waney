import 'styles/globals.css'
import { Nunito } from '@next/font/google'

const nunito = Nunito({
  weight: ['300', '400', '500', '600', '700', '800', '900']
})

export default function RootLayout ({ children }) {
  return (
    <html className={nunito.className}>
      <head />
      <body className='bg-black flex flex-col justify-between px-9 py-14 h-screen'>
        {children}
      </body>
    </html>
  )
}
