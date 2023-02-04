'use client'

import addMovement from 'app/services/addMovement'
import { auth, db } from 'app/services/firebaseClient'
import { doc, increment, updateDoc } from 'firebase/firestore'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

export default function useMovement ({ amount, description, date, category, type, account }) {
  const [user] = useAuthState(auth)
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  console.log(type.value)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    addMovement(amount.value, description.value, date.value, user.uid, category.value, type.value, account.value)
      .then(() => updateDoc(doc(db, 'users', user.uid, 'accounts', account.value.toLowerCase()), {
        amount: increment(type.value === 'income' ? amount.value : -amount.value)
      }).then(() => router.replace('/home')))
      .catch(err => console.log(err))
  }

  return (
    [handleSubmit, loading]
  )
}
