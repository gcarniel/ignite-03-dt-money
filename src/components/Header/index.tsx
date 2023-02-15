import * as Dialog from '@radix-ui/react-dialog'

import * as s from './styles'
import logo from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <s.HeaderContainer>
      <s.HeaderContent>
        <img src={logo} alt="" />

        <Dialog.Root>
          {/* asChild diz para que o trigger nao crie um botao e use o meu como filho, ja que e seu comportamento padrao, 
            assim no html terá apenas um button
          */}
          <Dialog.Trigger asChild>
            <s.NewTransactionButton>Nova Transação</s.NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </s.HeaderContent>
    </s.HeaderContainer>
  )
}
