export const NewQuoteAction = 'new_quote' as const
export const IntervalAction = 'update_interval' as const

export type ServerQuote = { id: number, quote: string }
export type ServerQuoteInterval = { interval: number }

export type ServerQuoteResponse
  = | { action: typeof NewQuoteAction, body: ServerQuote }
    | { action: typeof IntervalAction, body: ServerQuoteInterval }

export type ServerStreamingResponse = { enabled: boolean, global: boolean, interval: number }
