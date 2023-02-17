import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useTransactions } from '../../hooks/useTransactions'
import { priceFormatter } from '../../utils/formatter'
import * as s from './styles'

export function Summary() {
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

  return (
    <s.SummaryContainer>
      <s.SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00B37E" />
        </header>
        <strong>{priceFormatter.format(summary.income)}</strong>
      </s.SummaryCard>

      <s.SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </header>
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </s.SummaryCard>

      <s.SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#FFF" />
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </s.SummaryCard>
    </s.SummaryContainer>
  )
}
