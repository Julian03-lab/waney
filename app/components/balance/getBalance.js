import { getAllAccounts } from 'app/(with-navbar)/accounts/getAccounts'

export default async function getBalance (token) {
  let result = await getAllAccounts(token?.value)
  if (!result) return null

  result = result.reduce((total, actual) => total + Number(actual.amount !== undefined ? actual.amount : actual.inicialAmount), 0)
  return result
}
