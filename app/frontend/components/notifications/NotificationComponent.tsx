import { Toast, ToastContainer } from 'react-bootstrap'

import { NotificationMessage, RemoveNotificationFunction } from '@/types/notifications'

type NotificationContainerProps = {
  notifications: NotificationMessage[]
  onClose: RemoveNotificationFunction
}

export const NotificationComponent = (
  { notifications, onClose }: NotificationContainerProps,
) => {
  return (
    <ToastContainer position="top-end" className="p-3" style={{ zIndex: 1050 }}>
      {notifications.map(notification => (
        <Toast
          key={notification.id}
          bg={notification.variant}
          onClose={() => onClose(notification.id)}
          delay={5000}
          autohide
        >
          <Toast.Header>
            <strong className="me-auto">{notification.header}</strong>
          </Toast.Header>
          <Toast.Body className={notification.variant === 'dark' ? 'text-white' : ''}>
            {notification.body}
          </Toast.Body>
        </Toast>
      ))}
    </ToastContainer>
  )
}
