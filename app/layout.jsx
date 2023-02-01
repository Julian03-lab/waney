import 'styles/globals.css'
import { Nunito } from '@next/font/google'
import 'bootstrap-icons/font/bootstrap-icons.css'

const nunito = Nunito({
  weight: ['300', '400', '500', '600', '700', '800', '900']
})

export default function RootLayout ({ children }) {
  return (
    <html>
      <head />
      <body className={`${nunito.className} h-screen overflow-hidden`}>
        {children}
      </body>
    </html>
  )
}
