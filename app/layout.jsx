import 'styles/globals.css'
import { Nunito } from '@next/font/google'

const nunito = Nunito({
  weight: ['300', '400', '600', '700', '800', '900']
})

export default function RootLayout ({ children }) {
  return (
    <html className={nunito.className}>
      <head />
      <body>
        {children}
        <div className='fixed -z-20 -left-28 -bottom-72 h-[700px] w-[700px] bg-black rounded-full' />
      </body>
    </html>
  )
}
