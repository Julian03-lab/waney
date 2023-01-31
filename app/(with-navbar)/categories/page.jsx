import { cookies } from 'next/headers'
import AddCategory from './AddCategory'
import getCategories from './getCategories'
import Link from 'next/link'

export default async function Categories () {
  const nextCookies = cookies()
  const token = nextCookies.get('userID')
  const categories = await getCategories(token)

  return (
    <section className='flex flex-col w-full gap-4 items-center'>
      <h2 className='text-2xl font-bold text-primary-100'>Todas las categorias</h2>
      <article className='grid grid-cols-3 overflow-y-auto grid-rows-5 gap-2 w-full max-h-[548px]'>
        {(!categories || categories.length < 15) && <AddCategory href='/categories/new' />}
        {categories && categories.map((category) => (
          <Link href={{ pathname: `categories/${category.id}` }} key={category.id} className='flex flex-col items-center justify-center py-2 bg-black-secondary rounded-xl hover:border hover:border-primary-100 border border-black-primary'>
            <div className='text-4xl'>
              {category.icon}
            </div>
            <h3 className='text-base font-bold text-white w-16 text-center truncate'>{category.name}</h3>
          </Link>
        ))}
      </article>
    </section>
  )
}
