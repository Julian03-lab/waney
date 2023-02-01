import { db } from 'app/services/firebaseClient'
import { collection, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore'

export const listenMovements = (callback) => {
  const data = collection(db, 'movements')
  return onSnapshot(query(data, orderBy('createdAt', 'desc')), (querySnapshot) => {
    const newMovements = querySnapshot.docs.map(doc => {
      const data = doc.data()
      const id = doc.id
      return { id, ...data }
    })
    callback(newMovements)
  })
}

export default async function getMovements (userID) {
  try {
    const data = collection(db, 'users', userID.value, 'movements')
    const querySnapshot = await getDocs(query(data, orderBy('createdAt', 'desc')))
    if (querySnapshot.empty) {
      return null
    }
    return querySnapshot.docs.map(doc => {
      const data = doc.data()
      const id = doc.id
      return { id, ...data }
    })
  } catch (error) {
    console.log(error)
  }
}
