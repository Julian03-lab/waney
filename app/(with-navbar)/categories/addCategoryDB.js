import { db } from 'app/services/firebaseClient'
import { addDoc, collection, doc, getDocs, setDoc, writeBatch } from 'firebase/firestore'

export function updateCategoryDB (name, icon, uid, categoryID) {
  const data = {
    name,
    icon
  }

  const categories = doc(db, 'users', uid, 'category', categoryID)

  return setDoc(categories, data)
}

export async function defaultCategories (uid) {
  const data = collection(db, 'users', uid, 'category')
  try {
    const querySnapshot = await getDocs(data)
    if (querySnapshot.empty) {
      const batch = writeBatch(db)

      batch.set(doc(db, 'users', uid, 'category', 'salary'), { name: 'Salario', icon: '💵' })
      batch.set(doc(db, 'users', uid, 'category', 'gift'), { name: 'Regalo', icon: '🎁' })
      batch.set(doc(db, 'users', uid, 'category', 'other'), { name: 'Otros', icon: '📦' })

      return await batch.commit()
    }
  } catch {
    console.log('error')
  }
}

export default function addCategoryDB (name, icon, uid) {
  const data = {
    name,
    icon
  }

  const categories = collection(db, 'users', uid, 'category')

  return addDoc(categories, data)
}
