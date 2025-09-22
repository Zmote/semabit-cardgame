import { ChangeEvent } from 'react'
import { Spinner } from 'react-bootstrap'

import RowCol from '@/components/boostrap/RowCol'

import YodaForm from '../components/YodaForm'
import YodaQuote from '../components/YodaQuote'
import { useQuotes } from '../hooks/useQuotes'

const YodaQuotes = () => {
  const { quotesInterval, globalStreaming, serverQuotes, handleIntervalSelection } = useQuotes()

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    handleIntervalSelection(Number(event.target.value))
  }

  return (
    <RowCol rowProps={{ className: 'justify-content-center' }} colProps={{ xs: 12, md: 6 }}>
      <RowCol>
        <YodaForm value={quotesInterval} onChange={onChange} />
      </RowCol>
      <hr />
      <RowCol>
        {serverQuotes.length > 0
          ? (
              serverQuotes.map((serverQuote, index) => {
                return (
                  <YodaQuote
                    isNew={index === 0}
                    key={serverQuote.id}
                    serverQuote={serverQuote}
                  >
                  </YodaQuote>
                )
              })
            )
          : (
              <div>
                {`${globalStreaming ? 'Global: ' : 'Per Instance: '}Waiting for Quotes...`}
                <Spinner
                  className="ms-1"
                  animation="border"
                  size="sm"
                  variant="primary"
                >
                </Spinner>
              </div>
            )}
      </RowCol>
    </RowCol>
  )
}

export default YodaQuotes
