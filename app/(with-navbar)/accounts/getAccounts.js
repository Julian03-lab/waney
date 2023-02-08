import { db } from 'app/services/firebaseClient'
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'

export async function getAllAccounts (userID) {
  try {
    const data = collection(db, 'users', userID, 'accounts')
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
    console.log(error)
  }
}

export async function getAccountMovements (userID, accountName) {
  try {
    const data = collection(db, 'users', userID, 'movements')
    // eslint-disable-next-line yoda
    const querySnapshot = await getDocs(query(data, where('account', '==', accountName)))
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

export async function getAccount (userID, accountName) {
  try {
    const data = doc(db, 'users', userID, 'accounts', accountName)
    const docSnap = await getDoc(data)

    return docSnap
  } catch (error) {
    console.log('Error', error)
  }
}
