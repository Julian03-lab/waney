import { db } from 'app/services/firebaseClient'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'

export async function getCategory (userID, categoryID) {
  try {
    const data = doc(db, 'users', userID, 'category', categoryID)
    const docSnap = await getDoc(data)
    return docSnap.data()
  } catch (error) {
    console.log('')
  }
}

export default async function getCategories (userID) {
  try {
    const data = collection(db, 'users', userID, 'category')
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
    console.log('error')
  }
}
