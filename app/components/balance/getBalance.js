import { getAllAccounts } from 'app/(with-navbar)/accounts/getAccounts'

export default async function getBalance (token) {
  let result = await getAllAccounts(token?.value)
  if (!result) return null

  result = result.reduce((total, { amount }) => total + Number(amount), 0)
  return result
}
