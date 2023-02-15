import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

import * as s from './styles'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <s.Overlay />

      <s.Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <s.CloseButton>
          <X size={24} />
        </s.CloseButton>

        <form action="">
          <input type="text" placeholder="Descrição" required />
          <input type="numbe" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <s.TransactionType>
            <s.TransactionTypeButton value="income" variant="income">
              <ArrowCircleUp size={24} />
              Entrada
            </s.TransactionTypeButton>
            <s.TransactionTypeButton value="outcome" variant="outcome">
              <ArrowCircleDown size={24} />
              Saída
            </s.TransactionTypeButton>
          </s.TransactionType>

          <button type="submit">Cadastrar</button>
        </form>
      </s.Content>
    </Dialog.Portal>
  )
}
