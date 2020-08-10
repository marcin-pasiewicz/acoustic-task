import React from 'react'
import styled from 'styled-components'
import { Element } from '../../models/Content'
import { ElemeneTypes as ElemeneNames } from './elementTypes'
import Heading from '../Heading/Heading'
import Author from '../Author/Author'
import MainImage from '../MainImage/MainImage'
import Body from '../Body/Body'
import Date from '../Date/Date'

interface Props {
  elements: Element[];
}

export default function Elements({ elements }: Props) {
  const processedElements = Object.entries(elements).map((e) => ({ ...e[1], elementName: e[0] }));

  function getElement(element: any) {
    switch (element.elementName) {
      case ElemeneNames.heading:
        return <Heading {...element} />
      case ElemeneNames.author:
        return <Author {...element} />
      case ElemeneNames.body:
        return <Body {...element} />
      case ElemeneNames.date:
        return <Date {...element} />
      case ElemeneNames.mainImage:
        return <MainImage {...element} />
      default:
        return <div>Unknown element</div>
    }
  }
  return (
    <ElementsWrapper>
      {processedElements.map((element, index) => (
        <div key={index}>
          {getElement(element)}
        </div>
      ))}
    </ElementsWrapper>
  )
}

const ElementsWrapper = styled.div`
  max-width: 600px;
  margin: auto;
`