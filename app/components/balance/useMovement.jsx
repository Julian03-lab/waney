'use client'

import { getAccountMovements } from 'app/(with-navbar)/accounts/getAccounts'
import addMovement from 'app/services/addMovement'
import { auth, db } from 'app/services/firebaseClient'
import { doc, updateDoc } from 'firebase/firestore'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    addMovement(amount.value, description.value, date.value, user.uid, category.value, type.value, account.value)
      .then(() => getAccountMovements(user.uid, account.value)
        .then((result) => updateDoc(doc(db, 'users', user.uid, 'accounts', account.value.toLowerCase()), { amount: countTotal(result) })))
      .then(() => router.back())
      .catch(err => console.log(err))
  }

  return (
    [handleSubmit, loading]
  )
}
