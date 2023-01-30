import { db } from 'app/services/firebaseClient'
import { Timestamp, addDoc, collection } from 'firebase/firestore'

export default function addMovement (amount, description, date, uid, category, type, account, recipient) {
  const data = {
    amount,
    description,
    date,
    category,
    type,
    account,
    recipient,
    uid,
    createdAt: Timestamp.fromDate(new Date())
  }

  const movements = collection(db, 'users', uid, 'movements')

  return addDoc(movements, data)
}
