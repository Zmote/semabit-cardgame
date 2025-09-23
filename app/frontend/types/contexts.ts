import { Dispatch, SetStateAction } from 'react'

import { AddNotificationFunction } from '@/types/notifications'

export type PaddedContainerContextType = {
  padding: boolean
  setPadding: Dispatch<SetStateAction<boolean>>
}

export type NotificationContextType = {
  addNotification: AddNotificationFunction
}
