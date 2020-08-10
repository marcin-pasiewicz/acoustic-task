import React, { ReactElement } from 'react'
import parse from 'html-react-parser';

interface Props {
  values: string[]
}

export default function Body({values}: Props): ReactElement {
  return (
    <div>
      {values.map(e => parse(e))}
    </div>
  )
}
