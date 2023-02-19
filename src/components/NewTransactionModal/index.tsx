import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'
import { Transaction } from '../../contexts/TransactionsContext'
import { useTransactions } from '../../hooks/useTransactions'

import * as s from './styles'

const newTransactionsFormSchema = z.object({
  description: z.string(),
  category: z.string(),
  price: z.number(),
  type: z.enum(['income', 'outcome']),
  id: z.number().optional(),
  createdAt: z.date().optional(),
})

type NewTransactionsFormInputs = z.infer<typeof newTransactionsFormSchema>

interface NewTransactionModalProps {
  transactionData?: Transaction
}

export function NewTransactionModal({
  transactionData,
}: NewTransactionModalProps) {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
    setValue,
  } = useForm<NewTransactionsFormInputs>({
    resolver: zodResolver(newTransactionsFormSchema),
    defaultValues: {
      type: 'outcome',
    },
  })

  const { createTransaction } = useTransactions()

  const handleCreateNewTransaction = async (
    data: NewTransactionsFormInputs,
  ) => {
    await createTransaction(data)
    reset()
  }

  useEffect(() => {
    if (transactionData?.id) {
      setValue('category', transactionData?.category)
      setValue('description', transactionData?.description)
      setValue('price', transactionData?.price)
      setValue('type', transactionData?.type)
      setValue('id', transactionData?.id)
      setValue(
        'createdAt',
        transactionData?.createdAt
          ? new Date(transactionData?.createdAt)
          : undefined,
      )
    }
  }, [transactionData, setValue])
  return (
    <Dialog.Portal>
      <s.Overlay />
      <s.Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <s.CloseButton>
          <X size={24} />
        </s.CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register('description')}
          />
          <input
            type="numbe"
            placeholder="Preço"
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={(props) => {
              return (
                <s.TransactionType
                  value={props.field.value}
                  onValueChange={props.field.onChange}
                >
                  <s.TransactionTypeButton value="income" variant="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </s.TransactionTypeButton>
                  <s.TransactionTypeButton value="outcome" variant="outcome">
                    <ArrowCircleDown size={24} />
                    Saída
                  </s.TransactionTypeButton>
                </s.TransactionType>
              )
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </s.Content>
    </Dialog.Portal>
  )
}
