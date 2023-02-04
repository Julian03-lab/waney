import { getAllAccounts } from 'app/(with-navbar)/accounts/getAccounts'
import { cookies } from 'next/headers'

export default async function getBalance () {
  const nextCookies = cookies()
  const token = nextCookies.get('userID')

  let result = await getAllAccounts(token.value)
  result = result.reduce((total, { amount }) => total + Number(amount), 0)
  return result
}
