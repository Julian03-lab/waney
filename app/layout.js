import 'styles/globals.css'
import { Nunito } from '@next/font/google'
import BGWave from './components/svgs/wave'

const nunito = Nunito({
  weight: ['300', '400', '600', '700', '800', '900']
})

export default function RootLayout ({ children }) {
  return (
    <html className={nunito.className}>
      <head />
      <body>
        {children}
        <div className='fixed -z-20 -left-[1300px] bottom-0'>
          <BGWave width={1962} />
        </div>
      </body>
    </html>
  )
}
