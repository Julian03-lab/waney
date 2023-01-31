import { db } from 'app/services/firebaseClient'
import { deleteDoc, doc } from 'firebase/firestore'

export default function deleteCategoryDB (id, uid) {
  const category = doc(db, 'users', uid, 'category', id)

  return deleteDoc(category)
}
