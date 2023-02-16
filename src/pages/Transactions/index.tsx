import { useContext, useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { Transaction } from '../../contexts/TransactionsContext'
import { useTransactions } from '../../hooks/useTransactions'
import { SearchForm } from '../Transactions/components/'
import * as s from './styles'

export function Transactions() {
  const { transactions } = useTransactions()
  return (
    <>
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
                      {transaction.price}
                    </s.PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              )
            })}
          </tbody>
        </s.TransactionTable>
      </s.TransactionContainer>
    </>
  )
}
