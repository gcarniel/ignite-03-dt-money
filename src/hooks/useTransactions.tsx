import { useContext } from 'react'
import { TransactionContext } from '../contexts/TransactionsContext'

export function useTransactions() {
  const props = useContext(TransactionContext)
  return { ...props }
}
