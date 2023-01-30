export default function ShortMovement ({ amount, date, category, type, account, description }) {
  let categoryIcon = ''
  switch (category) {
    case 'gift':
      categoryIcon = 'bi bi-gift'
      break
    case 'food':
      categoryIcon = 'fas fa-utensils'
      break
    case 'transport':
      categoryIcon = 'fas fa-bus'
      break
    case 'shopping':
      categoryIcon = 'fas fa-shopping-bag'
      break
    case 'entertainment':
      categoryIcon = 'fas fa-gamepad'
      break
    case 'health':
      categoryIcon = 'fas fa-heartbeat'
      break
    case 'education':
      categoryIcon = 'fas fa-graduation-cap'
      break
    case 'salary':
      categoryIcon = 'fas fa-money-bill-wave'
      break
    case 'others':
      categoryIcon = 'fas fa-ellipsis-h'
      break
    default:
      categoryIcon = 'fas fa-ellipsis-h'
      break
  }

  return (
    <li className='flex justify-between py-2 px-3 bg-black-secondary rounded-xl shadow-md'>
      <div className='flex items-center gap-3'>
        <i className={`${categoryIcon} text-2xl rounded-lg text-primary-100`} />
        <div className='flex flex-col items-start justify-center'>
          <h3 className='text-white font-bold truncate max-w-[135px]'>{description}</h3>
          <p className='text-white font-medium text-sm'>{account}</p>
        </div>
      </div>
      <div className='flex flex-col items-end justify-center'>
        <h3 className={`${type === 'income' ? 'text-success' : 'text-error'} font-bold`}>
          {type === 'income' ? '+ $' + amount : '- $' + amount}
        </h3>
        <p className='text-white font-medium text-sm'>{date.split('-').reverse().join('/')}</p>
      </div>
    </li>
  )
}
