import * as Dialog from '@radix-ui/react-dialog'

import * as s from './styles'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <s.HeaderContainer>
      <s.HeaderContent>
        <img src={logo} alt="" />

        <Dialog.Trigger asChild>
          <s.NewTransactionButton>Nova Transação</s.NewTransactionButton>
        </Dialog.Trigger>
      </s.HeaderContent>
    </s.HeaderContainer>
  )
}
