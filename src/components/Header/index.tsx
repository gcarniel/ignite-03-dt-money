import * as s from './styles'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <s.HeaderContainer>
      <s.HeaderContent>
        <img src={logo} alt="" />
        <s.NewTransactionButton>Nova Transação</s.NewTransactionButton>
      </s.HeaderContent>
    </s.HeaderContainer>
  )
}
