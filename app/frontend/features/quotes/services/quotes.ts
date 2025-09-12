export const QuotesService = {
    getServerStreamingStatus: () => fetch('/api/v1/quotes/status')
        .then(res => res.json())
}