import styled from 'styled-components'

export const TransactionContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const TransactionTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    background-color: ${(props) => props.theme['gray-700']};
    padding: 1.25rem 2rem;

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

  td > div {
    display: flex;
    gap: 0.5rem;
  }
`

interface ActionButton {
  variant: 'edit' | 'delete'
}

export const EditButton = styled.button<ActionButton>`
  background-color: ${(props) => props.theme['gray-600']};
  border: 0;
  color: ${(props) => props.theme['gray-300']};
  padding: 0.3rem;
  border-radius: 999px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: ${(props) =>
      props.variant === 'edit'
        ? props.theme['green-300']
        : props.theme['red-300']};
    background-color: ${(props) => props.theme['gray-900']};
  }
`

interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}
export const PriceHighlight = styled.span<PriceHighlightProps>`
  display: inline-block;
  width: max-content;
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`
