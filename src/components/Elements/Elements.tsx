import React from "react";
import styled from "styled-components";
import { Element } from "../../models/Content";
import { ElemeneTypes as ElemeneNames } from "./elementTypes";
import Heading from "../Heading/Heading";
import Author from "../Author/Author";
import MainImage from "../MainImage/MainImage";
import Body from "../Body/Body";
import Date from "../Date/Date";
import { elementsOrder } from "./config";
import { prepareElements } from "./helpers";
import { isEmpty } from "../../helpers/objectHelpers";

interface Props {
  elements: {
    [key: string]: Element;
  };
}

export default function Elements({ elements }: Props) {
  const processedElements = prepareElements(elements, elementsOrder);

  function getElement(element: any) {
    switch (element.elementName) {
      case ElemeneNames.heading:
        return <Heading {...element} />;
      case ElemeneNames.mainImage:
        return <MainImage {...element} />;
      case ElemeneNames.body:
        return <Body {...element} />;
      case ElemeneNames.author:
        return <Author {...element} />;
      case ElemeneNames.date:
        return <Date {...element} />;
      default:
        return <div>Unknown element</div>;
    }
  }
  return (
    <ElementsWrapper>
      {!isEmpty(elements) &&
        processedElements.map((element, index) => (
          <div key={index}>{getElement(element)}</div>
        ))}
    </ElementsWrapper>
  );
}

const ElementsWrapper = styled.div`
  max-width: 600px;
  margin: auto;
`;
