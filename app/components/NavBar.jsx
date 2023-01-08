
import NavBarItem from './NavBarItem'

const links = [
  { route: '/', label: 'Home', active: false },
  { route: '/movements', label: 'Movements', active: false },
  { route: '/accounts', label: 'Accounts', active: true },
  { route: '/settings', label: 'Settings', active: false }
]

export default function NavBar () {
  return (
    <header>

      <nav className='flex flex-col justify-center items-start p-0 w-screen'>
        <NavBarItem links={links} />

      </nav>
    </header>
  )
}
