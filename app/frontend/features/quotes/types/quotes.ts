export type ServerQuote = {id: number, quote: string}
export type ServerQuoteResponse = {body: ServerQuote};
export type ServerStreamingResponse = {enabled: boolean, global: boolean};