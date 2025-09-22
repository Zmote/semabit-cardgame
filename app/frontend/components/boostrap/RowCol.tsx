import React from 'react'
import { Row, Col } from 'react-bootstrap'

import type { ColProps } from 'react-bootstrap/Col'
import type { RowProps } from 'react-bootstrap/Row'

type RowColProps = {
  children: React.ReactNode
  rowProps?: RowProps
  colProps?: ColProps
}

const RowCol = ({ children, rowProps, colProps }: RowColProps) => {
  return (
    <Row {...rowProps}>
      <Col {...colProps}>
        {children}
      </Col>
    </Row>
  )
}

export default RowCol
