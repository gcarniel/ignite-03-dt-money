import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { useTransactions } from '../../hooks/useTransactions'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { SearchForm } from './components/SearchForm'
import * as s from './styles'
import * as Dialog from '@radix-ui/react-dialog'

import { Pencil, Trash } from 'phosphor-react'
import { NewTransactionModal } from '../../components/NewTransactionModal'
import { Transaction } from '../../contexts/TransactionsContext'
import { useState } from 'react'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { Alert } from '../../components/AlertDialog'

export function Transactions() {
  const { transactions, deleteTransaction } = useTransactions()
  const [transaction, setTransaction] = useState<Transaction>()

  const handleEditTransaction = (transaction: Transaction) => {
    setTransaction(transaction)
  }

  return (
    <>
      <Dialog.Root>
        <NewTransactionModal transactionData={transaction} />

        <Header />
        <Summary />

        <s.TransactionContainer>
          <SearchForm />

          <s.TransactionTable>
            <tbody>
              {transactions.map((transaction) => {
                return (
                  <tr key={transaction.id}>
                    <td width={'50%'}>{transaction.description}</td>
                    <td>
                      <s.PriceHighlight variant={transaction.type}>
                        {transaction.type === 'outcome' && '- '}
                        {priceFormatter.format(transaction.price)}
                      </s.PriceHighlight>
                    </td>
                    <td>{transaction.category}</td>
                    <td>
                      {dateFormatter.format(new Date(transaction.createdAt))}
                    </td>
                    <td>
                      <div>
                        <Dialog.Trigger asChild>
                          <s.EditButton
                            variant="edit"
                            onClick={() => handleEditTransaction(transaction)}
                          >
                            <Pencil size={16} />
                          </s.EditButton>
                        </Dialog.Trigger>
                        {/*  */}
                        <AlertDialog.Root>
                          <AlertDialog.Trigger asChild>
                            <s.EditButton variant="delete">
                              <Trash size={16} />
                            </s.EditButton>
                          </AlertDialog.Trigger>
                          <Alert
                            title="Deletar transação"
                            message={`Deseja mesmo excluir a transação '${transaction.description}?'`}
                            handleConfirm={() =>
                              deleteTransaction(transaction.id)
                            }
                          />
                        </AlertDialog.Root>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </s.TransactionTable>
        </s.TransactionContainer>
      </Dialog.Root>
    </>
  )
}
