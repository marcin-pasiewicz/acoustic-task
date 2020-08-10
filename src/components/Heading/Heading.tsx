import React, { ReactElement } from 'react'

interface Props {
  value: string;
}

export default function Heading({value}: Props): ReactElement {
  return (
    <h1>
      {value}
    </h1>
  )
}
