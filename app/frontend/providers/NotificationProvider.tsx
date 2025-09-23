import { ReactNode, useCallback, useMemo, useState } from 'react'

type NotificationProviderProps = {
  children: ReactNode
}

import { NotificationContext } from '@/AppContexts'
import { NotificationComponent } from '@/components/notifications/NotificationComponent'
import { AddNotificationFunction, NotificationMessage, RemoveNotificationFunction } from '@/types/notifications'

const NotificationProvider = ({ children }: NotificationProviderProps) => {
  const [notifications, setNotifications] = useState<NotificationMessage[]>([])
  const addNotification: AddNotificationFunction = useCallback((header, body, variant = 'primary') => {
    const id = Date.now()
    setNotifications(currentToasts => [...currentToasts, { id, header, body, variant }])
  }, [])
  const removeNotification: RemoveNotificationFunction = useCallback((id: number) => {
    setNotifications(currentToasts => currentToasts.filter(toast => toast.id !== id))
  }, [])

  const contextValue = useMemo(() => ({ addNotification }), [addNotification])
  return (
    <NotificationContext value={contextValue}>
      {children}
      <NotificationComponent notifications={notifications} onClose={removeNotification} />
    </NotificationContext>
  )
}

export default NotificationProvider
