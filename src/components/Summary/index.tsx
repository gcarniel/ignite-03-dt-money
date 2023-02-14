import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import * as s from './styles'

export function Summary() {
  return (
    <s.SummaryContainer>
      <s.SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00B37E" />
        </header>
        <strong>R$ 3000,02</strong>
      </s.SummaryCard>

      <s.SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </header>
        <strong>R$ 1500,02</strong>
      </s.SummaryCard>

      <s.SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#FFF" />
        </header>
        <strong>R$ 1100,02</strong>
      </s.SummaryCard>
    </s.SummaryContainer>
  )
}
