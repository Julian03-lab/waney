export default function ShortMovement ({ amount, date, category, type, account, description }) {
  return (
    <li className='flex justify-between py-2 px-3 lg:px-4 lg:py-3 bg-black-secondary rounded-xl shadow-md hover:cursor-pointer'>
      <div className='flex items-center gap-2 lg:gap-3'>
        <i className=' text-2xl lg:text-4xl rounded-lg not-italic'>
          {category}
        </i>
        <div className='flex flex-col items-start justify-center'>
          <h3 className='text-white font-bold truncate max-w-[135px] lg:max-w-none lg:text-xl'>{description}</h3>
          <p className='text-white font-medium text-sm max-w-[135px] lg:max-w-none truncate lg:text-base'>{account}</p>
        </div>
      </div>
      <div className='flex flex-col items-end justify-center'>
        <h3 className={`${type === 'income' ? 'text-success' : 'text-error'} font-bold lg:text-xl`}>
          {type === 'income' ? '+ $' + amount.toLocaleString('es-MX') : '- $' + amount.toLocaleString('es-MX')}
        </h3>
        <time dateTime={date} className='text-white font-medium text-sm lg:text-base'>{date.split('-').reverse().join('/')}</time>
      </div>
    </li>
  )
}
