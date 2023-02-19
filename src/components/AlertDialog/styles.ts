import * as AlertDialog from '@radix-ui/react-alert-dialog'

import styled from 'styled-components'

export const Overlay = styled(AlertDialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
`

export const Content = styled(AlertDialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  min-width: 32rem;
  max-width: 40rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${(props) => props.theme['gray-800']};
`
interface ActionButton {
  typeButton: 'cancel' | 'confirm'
}

export const Message = styled.div`
  padding: 2rem 0;
`

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;

  justify-content: flex-end;
`

export const Button = styled.button<ActionButton>`
  background-color: ${(props) => props.theme['gray-700']};
  color: ${(props) =>
    props.typeButton === 'cancel'
      ? props.theme['green-300']
      : props.theme['red-300']};
  border: solid 1px
    ${(props) =>
      props.typeButton === 'cancel'
        ? props.theme['green-300']
        : props.theme['red-300']};
  padding: 0.3rem 0.5rem;
  border-radius: 6px;
  cursor: pointer;

  transition: all 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.typeButton === 'cancel'
        ? props.theme['green-300']
        : props.theme['red-300']};

    color: ${(props) => props.theme['gray-900']};
  }
`
