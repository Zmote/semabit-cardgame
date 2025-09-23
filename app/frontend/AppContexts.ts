import { createContext } from 'react'

import { NotificationContextType, PaddedContainerContextType } from '@/types/contexts'

export const PaddedContainerContext = createContext<PaddedContainerContextType | null>(null)
export const NotificationContext = createContext<NotificationContextType | null>(null)
