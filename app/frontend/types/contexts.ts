import { Dispatch, SetStateAction } from 'react'

export type PaddedContainerContextType = {
  padding: boolean
  setPadding: Dispatch<SetStateAction<boolean>>
} | null
