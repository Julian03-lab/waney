export default function separateDates (data) {
  const today = new Date()
  today.getDate()
  const dates = {
    Proximamente: [],
    Hoy: [],
    Ayer: [],
    'Semana Pasada': [],
    'Mes Pasado': [],
    Anteriores: []
  }

  data.forEach((movement) => {
    const movementDate = new Date(movement.date)
    const diff = today - movementDate
    const days = diff / (1000 * 60 * 60 * 24)
    if (days < 0) {
      dates.Proximamente.push(movement)
    } else if (days < 1) {
      dates.Hoy.push(movement)
    } else if (days < 2) {
      dates.Ayer.push(movement)
    } else if (days < 7) {
      dates['Semana Pasada'].push(movement)
    } else if (days < 30) {
      dates['Mes Pasado'].push(movement)
    } else {
      dates.Anteriores.push(movement)
    }
  })
  return dates
}
