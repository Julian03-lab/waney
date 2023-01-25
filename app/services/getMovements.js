import { db } from 'app/services/firebaseClient'
import { collection, getDocs } from 'firebase/firestore'

export default async function getMovements () {
  const querySnapshot = await getDocs(collection(db, 'movements'))
  return querySnapshot.docs.map(doc => {
    const data = doc.data()
    const id = doc.id
    return { id, ...data }
  })
}
