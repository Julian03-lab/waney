import { db } from 'app/services/firebaseClient'
import { addDoc, collection } from 'firebase/firestore'

export default function addCategoryDB (name, icon, uid) {
  const data = {
    name,
    icon
  }

  const categories = collection(db, 'users', uid, 'category')

  return addDoc(categories, data)
}
