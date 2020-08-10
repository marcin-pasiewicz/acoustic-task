import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { CONTENT_BASE_URL } from '../../config/api'

interface Props {
  value: any;
}

export default function MainImage({ value }: Props): ReactElement {
  const { altText = '', fileName = '' } = value.leadImage.asset;
  const src = `${CONTENT_BASE_URL}${value.leadImage.url}`
  return (
    <StyledImage data-test-id="main-image" src={src} alt={altText || fileName} />
  )
}

const StyledImage = styled.img.attrs(props => ({
  ...props,
  alt: props.alt,
  src: props.src,
}))`
  width: 100%;
  height: auto;
`