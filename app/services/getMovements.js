import { db } from 'app/services/firebaseClient'
import { collection, getDocs } from 'firebase/firestore'

export default async function getMovements () {
  const querySnapshot = await getDocs(collection(db, 'movements'))
  if (querySnapshot.empty) {
    return null
  }
  return querySnapshot.docs.map(doc => {
    const data = doc.data()
    const id = doc.id
    console.log(id, data)
    return { id, ...data }
  })
}
