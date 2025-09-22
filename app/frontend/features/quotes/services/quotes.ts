export const QuotesService = {
  getStatus: () => fetch('/api/v1/quotes/status')
    .then(res => res.json()),
}
