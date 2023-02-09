import { db } from 'app/services/firebaseClient'
import { doc, setDoc } from 'firebase/firestore'

export default async function addAccount ({ accountName, inicialAmount }, uid) {
  const data = {
    accountName,
    inicialAmount
  }

  const accounts = doc(db, 'users', uid, 'accounts', accountName.toLowerCase())

  return await setDoc(accounts, data)
}
