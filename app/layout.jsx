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
      </body>
    </html>
  )
}
