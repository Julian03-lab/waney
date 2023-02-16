import { db } from 'app/services/firebaseClient'
import { collection, getDoc, getDocs, orderBy, query, doc } from 'firebase/firestore'

export async function getGoal (uid, id) {
  try {
    const goal = doc(db, 'users', uid, 'goals', id)
    const docSnap = await getDoc(goal)
    return docSnap.data()
  } catch (error) {
    console.log(error)
  }
}

export default async function getGoals (uid) {
  try {
    const goals = collection(db, 'users', uid, 'goals')
    const querySnapshot = await getDocs(query(goals, orderBy('limitDate', 'asc')))
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
