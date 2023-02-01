import OptionButton from './OptionButton'

export default function OptionsList () {
  return (
    <ul className='flex items-center gap-3 w-full'>
      <li className='w-full'><OptionButton href='categories' icon='tag' text='Categorias' optionStyle='w-full py-4' /></li>
      <li className='w-full'><OptionButton href='categories' icon='cash-stack' text='Cuentas' optionStyle='w-full py-4' /></li>
      <li className='w-full'><OptionButton href='categories' icon='cash-stack' text='Cuentas' optionStyle='w-full py-4' /></li>
    </ul>
  )
}
