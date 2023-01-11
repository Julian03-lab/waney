import Login from './logIn-step/authLogin'
import { Nunito } from '@next/font/google'

const nunito = Nunito({
  weight: ['300', '400', '600', '700', '800', '900']
})

export default function AuthPage () {
  return (
    <main className={nunito.className}>

      <Login />
    </main>
  )
}
