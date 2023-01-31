import { db } from 'app/services/firebaseClient'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore'

export function updateCategoryDB (name, icon, uid, categoryID) {
  const data = {
    name,
    icon
  }

  const categories = doc(db, 'users', uid, 'category', categoryID)

  return setDoc(categories, data)
}

export default function addCategoryDB (name, icon, uid) {
  const data = {
    name,
    icon
  }

  const categories = collection(db, 'users', uid, 'category')

  return addDoc(categories, data)
}
