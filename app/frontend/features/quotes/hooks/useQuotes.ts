import { useCallback, useEffect, useRef, useState } from 'react'

import { Mixin, Subscription } from '@rails/actioncable'

import { channelName, QuotesChannel, quotesUuid } from '@/features/quotes/channels/quotes'

import { QuotesService } from '../services/quotes'
import {
  IntervalAction,
  NewQuoteAction,
  ServerQuote,
  ServerQuoteResponse,
  ServerStreamingResponse,
} from '../types/quotes'

type QuotesChannelProps = {
  quotesMax?: number
}

export function useQuotes({ quotesMax = 10 }: QuotesChannelProps = {}) {
  const [quotesInterval, setQuotesInterval] = useState(10)
  const [globalStreaming, setGlobalStreaming] = useState<boolean>(false)
  const [serverQuotes, setServerQuotes] = useState<ServerQuote[]>([])
  const subscriptionRef = useRef<Subscription | null>(null)

  const handleIntervalSelection = useCallback((newInterval: number) => {
    setQuotesInterval(newInterval)
    subscriptionRef.current?.perform(IntervalAction, { interval: newInterval })
  }, [])

  useEffect(() => {
    QuotesService.getStatus().then((data: ServerStreamingResponse) => {
      setGlobalStreaming(data.global)
      setQuotesInterval(data.interval)
    })
    subscriptionRef.current = QuotesChannel.subscriptions.create({ channel: channelName, uuid: quotesUuid }, {
      received(data: ServerQuoteResponse) {
        switch (data.action) {
          case NewQuoteAction:
            setServerQuotes((current) => {
              if (current.find(quote => quote.id === data.body.id)) {
                return current
              }
              if (current.length >= quotesMax) {
                current.pop()
              }
              return [data.body, ...current]
            })
            break
          case IntervalAction:
            // need to use functional update, as  subscription hooks are defined one on mount, and
            // they capture the initial value of quotesInterval (so inside the hooks, it stays the same, even if
            // you use setQuotesInterval, alternative solution would be to use a reducer
            // this "bug", or oversight more like, is called stale closure
            setQuotesInterval((current) => {
              if (current !== data.body.interval) {
                return data.body.interval
              }
              return current
            })
            break
        }
      },
    } satisfies Mixin)
    return () => {
      subscriptionRef.current?.unsubscribe()
      QuotesChannel.disconnect()
    }
  }, [])
  return { quotesInterval, globalStreaming, serverQuotes, handleIntervalSelection }
}
