import 'styles/globals.css'
import NavBar from 'components/NavBar/NavBar'

export default function RootLayout ({ children }) {
  return (
    <html>
      <head />
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
