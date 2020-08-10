import React, { ReactElement } from 'react'

interface Props {
  value: string;
}

export default function Author({ value }: Props): ReactElement {
  return (
    <div>
      {value}
    </div>
  )
}
