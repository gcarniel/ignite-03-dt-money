import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from '../Transactions/components/'
import * as s from './styles'

export function Transactions() {
  return (
    <>
      <Header />
      <Summary />

      <s.TransactionContainer>
        <SearchForm />

        <s.TransactionTable>
          <tbody>
            <tr>
              <td width={'50%'}>Desenvolvimento de site</td>
              <td>
                <s.PriceHighlight variant="income">
                  R$ 12.000,00
                </s.PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width={'50%'}>Hamburguer</td>
              <td>
                <s.PriceHighlight variant="outcome">
                  - R$ 59,00
                </s.PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>10/04/2022</td>
            </tr>
          </tbody>
        </s.TransactionTable>
      </s.TransactionContainer>
    </>
  )
}
