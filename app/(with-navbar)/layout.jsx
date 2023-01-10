import NavBar from 'app/components/NavBar/NavBar'

export default function AppLayout ({ children }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  )
}
