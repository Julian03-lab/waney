import 'styles/globals.css'
import NavBar from 'app/components/NavBar'

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
