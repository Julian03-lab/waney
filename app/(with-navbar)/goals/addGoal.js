import { db } from 'app/services/firebaseClient'
import { addDoc, collection } from 'firebase/firestore'

export default async function addNewGoal ({ goalName, limitDate, note, moneyGoal, emoji }, uid) {
  const data = {
    goalName,
    limitDate,
    note,
    moneyGoal,
    emoji,
    createdAt: new Date().toISOString(),
    actualAmount: 0

  }

  const goals = collection(db, 'users', uid, 'goals')

  return await addDoc(goals, data)
}
