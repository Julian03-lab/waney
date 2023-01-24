'use client'

import addMovement from 'app/services/addMovement'

export default function MakeMovement ({ amount, description, date, uid, category, type }) {
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const movementData = await addMovement({ amount, description, date, uid, category, type })

      console.log('Document written with ID: ', movementData.id)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <button type='submit' onClick={handleSubmit}>Subir</button>
  )
}
