import getMovements from 'app/services/getMovements'

export default async function Movements () {
  const movements = await getMovements()

  if (!movements) {
    return <div>No la hay</div>
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-6xl font-bold'>Movements</h1>
      <div className='flex flex-col items-center justify-center'>
        {
          movements.map(movement => (
            <div key={movement.id}>
              <p>{movement.amount}</p>
              <p>{movement.description}</p>
              <p>{movement.date}</p>
              <p>{movement.category}</p>
              <p>{movement.type}</p>
              <p>{movement.account}</p>
            </div>

          ))
}
      </div>
    </div>
  )
}
