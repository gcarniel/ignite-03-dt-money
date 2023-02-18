import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import * as s from './styles'
import { useTransactions } from '../../../../hooks/useTransactions'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const { fetchTransactions } = useTransactions()

  const handleSearchTransactios = async (data: SearchFormInputs) => {
    console.log(data)
    await fetchTransactions(data.query)
  }

  return (
    <s.SearchFormContainer onSubmit={handleSubmit(handleSearchTransactios)}>
      <input
        type="text"
        placeholder="Pesquise por transações"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </s.SearchFormContainer>
  )
}
