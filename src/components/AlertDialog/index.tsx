import * as AlertDialog from '@radix-ui/react-alert-dialog'

import * as s from './styles'
interface AlertProps {
  title: string
  message: string
  handleConfirm: () => void
}
export function Alert({ title, message, handleConfirm }: AlertProps) {
  return (
    <AlertDialog.Portal>
      <s.Overlay />
      <s.Content>
        <AlertDialog.Title>{title}</AlertDialog.Title>
        <s.Message>
          <p>{message}</p>
        </s.Message>
        <s.ButtonWrapper>
          <AlertDialog.Cancel asChild>
            <s.Button typeButton="cancel">Cancelar</s.Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
            <s.Button onClick={handleConfirm} typeButton="confirm">
              Sim, excluir
            </s.Button>
          </AlertDialog.Action>
        </s.ButtonWrapper>
      </s.Content>
    </AlertDialog.Portal>
  )
}
