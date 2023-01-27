export default function ShortMovement () {
  return (
    <li className='flex justify-between p-2 bg-black-secondary rounded-xl shadow-md'>
      <div className='flex items-center gap-3'>
        <div className='p-5 rounded-xl bg-white' />
        <div className='flex flex-col items-start justify-center'>
          <h3 className='text-white font-bold'>Sueldo</h3>
          <p className='text-white font-medium text-sm'>MercadoPago</p>
        </div>
      </div>
      <div className='flex flex-col items-end justify-center'>
        <h3 className='text-success font-bold'>+ $3.102</h3>
        <p className='text-white font-medium text-sm'>25/1/23</p>
      </div>
    </li>
  )
}
