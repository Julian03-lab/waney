import { db } from 'app/services/firebaseClient'
import { collection, getDocs } from 'firebase/firestore'

export default async function getCategories (userID) {
  try {
    const data = collection(db, 'users', userID.value, 'category')
    const querySnapshot = await getDocs(data)
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
