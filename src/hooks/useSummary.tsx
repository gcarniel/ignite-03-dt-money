import { useTransactions } from './useTransactions'

export function useSummary() {
  const { transactions } = useTransactions()

  const summary = transactions.reduce(
    (acc, cur) => {
      if (cur.type === 'income') {
        acc.income += cur.price
        acc.total += cur.price
      } else {
        acc.outcome += cur.price
        acc.total - +cur.price
      }

      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  return summary
}
