export default function ShortMovement ({ amount, date, category, type, account, description }) {
  return (
    <li className='flex justify-between py-2 px-3 bg-black-secondary rounded-xl shadow-md'>
      <div className='flex items-center gap-3'>
        <i className=' text-3xl rounded-lg not-italic'>
          {category}
        </i>
        <div className='flex flex-col items-start justify-center'>
          <h3 className='text-white font-bold truncate max-w-[135px]'>{description}</h3>
          <p className='text-white font-medium text-sm'>{account}</p>
        </div>
      </div>
      <div className='flex flex-col items-end justify-center'>
        <h3 className={`${type === 'income' ? 'text-success' : 'text-error'} font-bold`}>
          {type === 'income' ? '+ $' + amount.toLocaleString('es-MX') : '- $' + amount.toLocaleString('es-MX')}
        </h3>
        <p className='text-white font-medium text-sm'>{date.split('-').reverse().join('/')}</p>
      </div>
    </li>
  )
}
