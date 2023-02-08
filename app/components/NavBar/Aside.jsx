import Logo from '../svgs/Logo'
import Link from 'next/link'

function Tab ({ icon, name, href, path }) {
  return (
    <Link href={href} className={`flex items-center pl-4 pr-6 py-3 rounded-xl hover:bg-primary-200 gap-3 text-lg lg:text-xl font-medium text-white cursor-pointer ${path === href ? 'bg-primary-100 font-bold' : ''}`}>
      <i className={`bi bi-${icon}`} />
      <span>{name}</span>
    </Link>
  )
}

const tabs = [
  { icon: 'house-door-fill', name: 'Inicio', href: '/home' },
  { icon: 'stickies-fill', name: 'Movimientos', href: '/movements' },
  { icon: 'wallet-fill', name: 'Cuentas', href: '/accounts' },
  { icon: 'award-fill', name: 'Metas', href: '/goals' },
  { icon: 'calendar-fill', name: 'Calendario', href: '/calendar' },
  { icon: 'check-square-fill', name: 'Programar pagos', href: '/payments' },
  { icon: 'person-fill', name: 'Perfil', href: '/profile' },
  { icon: 'gear-fill', name: 'Configuracion', href: '/settings' },
  { icon: 'door-open', name: 'Cerrar sesion', href: '/logout' }
]

export default function Aside ({ user, path, open }) {
  return (
    <>
      <aside className={`flex flex-col pt-4 pb-10 lg:py-10 px-8 items-start justify-evenly h-screen bg-black-secondary lg:bg-black-primary lg:justify-between z-10 gap-2 fixed right-0 ${open ? 'visible' : 'hidden'} lg:flex lg:static`}>
        <div className='flex flex-col gap-2 py-4'>
          <div className='hidden lg:flex justify-between lg:mb-6'>
            <Logo height='34' width='132' />
          </div>
          {tabs.map(({ icon, name, href }) => (
            <Tab icon={icon} name={name} key={icon} path={path} href={href} />
          ))}
        </div>
        {user && (
          <div className='flex gap-2 text-lg lg:text-xl text-white font-medium items-center'>
            <div className='font-extrabold text-2xl py-1 px-4 rounded-full bg-primary-100 text-black-primary'>{user.displayName[0]}</div>
            <p>Hola <strong className='font-bold'>{user.displayName}</strong></p>
          </div>
        )}
      </aside>
    </>
  )
}
