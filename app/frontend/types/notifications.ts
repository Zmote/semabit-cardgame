type NotificationVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
export type AddNotificationFunction = (header: string, body: string, variant?: NotificationVariant) => void
export type RemoveNotificationFunction = (id: number) => void
export type NotificationMessage = {
  id: number
  header: string
  body: string
  variant?: string
}
