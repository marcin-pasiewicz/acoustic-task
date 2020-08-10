import React, { ReactElement } from 'react'
import moment from 'moment'
import {FULL_DATE_WITH_SECONDS} from './../../constants/dateFormats'

interface Props {
  value: string;
}

export default function Date({value}: Props): ReactElement {
  return (
    <div>
      {moment(value).format(FULL_DATE_WITH_SECONDS)}
    </div>
  )
}
