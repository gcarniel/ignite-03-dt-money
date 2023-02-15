import { MagnifyingGlass } from 'phosphor-react'
import * as s from './styles'

export function SearchForm() {
  return (
    <s.SearchFormContainer>
      <input type="text" placeholder="Pesquise por transações" />
      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </s.SearchFormContainer>
  )
}
