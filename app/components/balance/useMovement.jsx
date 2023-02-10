'use client'

import { getAccount, getAccountMovements } from 'app/(with-navbar)/accounts/getAccounts'
import addMovement from 'app/services/addMovement'
import { auth, db } from 'app/services/firebaseClient'
import { doc, updateDoc } from 'firebase/firestore'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

function countTotal (movements) {
  let total = 0
  movements.forEach(({ type, amount }) => {
    if (type === 'income') {
      total += amount
    } else {
      total -= amount
    }
  })
  return total
}

export default function useMovement ({ amount, description, date, category, type, account }) {
  const [user] = useAuthState(auth)
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [accountAmount, setAccountAmount] = useState(0)

  useEffect(() => {
    if (account.value !== '') {
      getAccount(user?.uid, account.value.toLowerCase()).then((doc) => {
        if (doc.exists()) {
          setAccountAmount(doc.data().inicialAmount)
        }
      })
    }
  }, [user, account])

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    addMovement(amount.value, description.value, date.value, user.uid, category.value, type.value, account.value)
      .then(() => getAccountMovements(user.uid, account.value)
        .then((result) => updateDoc(doc(db, 'users', user.uid, 'accounts', account.value.toLowerCase()), { amount: accountAmount + countTotal(result) })))
      .then(() => router.replace('/home'))
      .catch(err => console.log(err))
  }

  return (
    [handleSubmit, loading]
  )
}
