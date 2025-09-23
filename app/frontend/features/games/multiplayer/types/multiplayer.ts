export const WAIT_ACTION = 'wait' as const
export const MESSAGE_ACTION = 'message' as const

export type WaitMessage = {
  message: string
}

export type ChatMessage = {
  id: string
  message: string
  timestamp: number
}

export type GlobalChatResponse
  = | { action: typeof WAIT_ACTION, body: WaitMessage }
    | { action: typeof MESSAGE_ACTION, body: ChatMessage }
