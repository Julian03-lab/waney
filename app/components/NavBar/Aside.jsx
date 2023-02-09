import Logo from '../svgs/Logo'
import Link from 'next/link'

function Tab ({ icon, name, href, path, setOpen }) {
  return (
    <Link onClick={() => setOpen(false)} href={href} className={`flex items-center pl-4 pr-7 py-3 rounded-xl hover:bg-primary-200 gap-3 text-lg lg:text-xl font-medium text-white cursor-pointer ${path === href ? 'bg-primary-100 font-bold' : ''}`}>
      <i className={`bi bi-${icon}`} />
      <span>{name}</span>
    </Link>
  )
}

const tabs = [
  { icon: 'house-door', name: 'Inicio', href: '/home' },
  { icon: 'stickies', name: 'Movimientos', href: '/movements' },
  { icon: 'wallet', name: 'Cuentas', href: '/accounts' },
  { icon: 'tag', name: 'Categorias', href: '/categories' },
  { icon: 'award', name: 'Metas', href: '/goals' },
  { icon: 'calendar', name: 'Calendario', href: '/calendar' },
  { icon: 'check-square', name: 'Programar pagos', href: '/payments' },
  { icon: 'gear', name: 'Configuracion', href: '/settings' },
  { icon: 'door-open', name: 'Cerrar sesion', href: '/logout' }
]

export default function Aside ({ user, path, open, setOpen }) {
  return (
    <>
      <aside className={`flex flex-col pt-4 pb-10 lg:py-10 px-8 items-start justify-evenly h-screen bg-black-secondary lg:bg-black-primary lg:justify-between z-10 gap-2 fixed right-0 ${open ? 'visible' : 'hidden'} lg:flex lg:static w-full max-w-xs`}>
        <div className='flex flex-col gap-2 py-4'>
          <div className='hidden lg:flex justify-between lg:mb-6'>
            <Logo height='34' width='132' />
          </div>
          {tabs.map(({ icon, name, href }) => (
            <Tab icon={icon} name={name} key={icon} path={path} href={href} setOpen={setOpen} />
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
