/* eslint-disable array-callback-return */
import getMovements from 'app/services/getMovements'
import getCategories from 'app/(with-navbar)/categories/getCategories'

export async function getIncomeAndExpenses (token) {
  const today = new Date()

  try {
    const movements = await getMovements(token)
    const income = movements.filter(movement => movement.type === 'income' && (today - new Date(movement.date)) / (1000 * 60 * 60 * 24) < 7)
    const expenses = movements.filter(movement => movement.type === 'expense' && (today - new Date(movement.date)) / (1000 * 60 * 60 * 24) < 7)
    const incomeTotal = income.reduce((acc, movement) => acc + movement.amount, 0)
    const expensesTotal = expenses.reduce((acc, movement) => acc + movement.amount, 0)
    const total = incomeTotal - expensesTotal
    return { incomeTotal, expensesTotal, total }
  } catch (error) {
    return null
  }
}

export async function getMovementsByCategories (token) {
  const today = new Date()
  try {
    let movements = await getMovements(token)
    const categories = await getCategories(token.value)
    if (!movements) {
      return categories.map(({ name, icon, id }) => ({ name, icon, amount: 0, id }))
    }
    movements = movements.filter(movement => (today - new Date(movement.date)) / (1000 * 60 * 60 * 24) < 7)
    const accCategories = categories.map(({ name, icon, id }) => ({ name, icon, amount: 0, id }))
    categories.map((category, index) => {
      movements.map((movement) => {
        if (movement.category === category.icon) {
          if (movement.type === 'income') {
            accCategories[index].amount += movement.amount
          } else {
            accCategories[index].amount -= movement.amount
          }
        }
      })
    })
    return accCategories
  } catch (error) {
    return null
  }
}
