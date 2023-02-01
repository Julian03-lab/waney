import Link from 'next/link'

export default function AddCategory ({ href }) {
  return (
    <Link href={href} className='text-primary-100 hover:text-primary-400 text-4xl flex flex-col py-2 bg-black-secondary items-center justify-center rounded-xl'>
      <i className='bi bi-plus-circle-dotted' />
      <h3 className='text-xs font-bold text-center'>Agregar categoria</h3>
    </Link>
  )
}
