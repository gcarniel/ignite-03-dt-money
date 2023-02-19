import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

export interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

interface CreateTransactionInput {
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  id?: number
  createdAt?: Date
}

interface TransactionsContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
  deleteTransaction: (id: number) => void
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }, [])

  const updateTransaction = useCallback(
    async (data: CreateTransactionInput) => {
      const { category, description, price, type, id, createdAt } = data

      const response = await api.put('/transactions/' + id, {
        category,
        description,
        price,
        type,
        createdAt: createdAt ? new Date(createdAt) : new Date(),
      })

      const newTransactions = transactions.map((transaction) => {
        if (transaction.id === id) {
          return {
            ...transaction,
            ...response.data,
          }
        }

        return transaction
      })

      setTransactions(newTransactions)
    },
    [transactions],
  )

  const deleteTransaction = useCallback(
    async (id: number) => {
      await api.delete('/transactions/' + id)

      const newTransactions = transactions.filter(
        (transaction) => transaction.id !== id,
      )

      setTransactions(newTransactions)
    },
    [transactions],
  )

  const createTransaction = useCallback(
    async (data: CreateTransactionInput) => {
      const { category, description, price, type, id } = data

      if (id) {
        updateTransaction(data)
        return
      }

      const response = await api.post('/transactions', {
        category,
        description,
        price,
        type,
        createdAt: new Date(),
      })

      setTransactions((state) => [response.data, ...state])
    },
    [updateTransaction],
  )

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])
  return (
    <TransactionContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
