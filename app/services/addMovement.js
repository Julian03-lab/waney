import { db } from 'app/services/firebaseClient'
import { collection, addDoc } from 'firebase/firestore'

export default function addMovement (amount, description, date, uid, category, type, account, recipient) {
  return addDoc(collection(db, 'movements'), {
    amount,
    description,
    date,
    uid,
    category,
    type,
    account,
    recipient
  })
}
