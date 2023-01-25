'use client'

import addMovement from 'app/services/addMovement'
import { auth } from 'app/services/firebaseClient'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

export default function useMovement ({ amount, description, date, category, type, account, recipient }) {
  const [user] = useAuthState(auth)
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    addMovement(amount.value, description.value, date.value, user.uid, category.value, type.value, account.value, recipient.value)
      .then(() => router.replace('/home'))
      .catch(err => console.log(err))
  }

  return (
    [handleSubmit, loading]
  )
}
