import { ChangeEventHandler, useId } from 'react'
import { Col, Form, Row } from 'react-bootstrap'

type YodaFormProps = {
  value: number
  onChange: ChangeEventHandler<HTMLSelectElement>
}

const YodaForm = ({ value, onChange }: YodaFormProps) => {
  const selectId = useId()
  const selectHelperId = useId()

  return (
    <Form>
      <Form.Group as={Row}>
        <Form.Label column sm={8} htmlFor={selectId}>
          <h4 className="mb-0"><strong>Yoda Quotes</strong></h4>
        </Form.Label>
        <Col sm={4}>
          <Form.Select
            value={value}
            id={selectId}
            onChange={onChange}
            aria-describedby={selectHelperId}
            aria-label="Quotes interval selection"
          >
            <option value={2}>2s</option>
            <option value={5}>5s</option>
            <option value={10}>10s</option>
          </Form.Select>
        </Col>
        <Form.Text id={selectHelperId} muted>
          A randomly generated list of Yoda Quotes with configurable interval. The interval is global for both
          modes (global & instance)
        </Form.Text>
      </Form.Group>
    </Form>
  )
}

export default YodaForm
