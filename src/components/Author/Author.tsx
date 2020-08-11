import React, { ReactElement } from 'react'
import styled from 'styled-components';

interface Props {
  value: string;
}

export default function Author({ value }: Props): ReactElement {
  return (
    <StyledAutor>
      {value}
    </StyledAutor>
  )
}

const StyledAutor = styled.div`
  font-size: ${({theme}) => theme.fontSize.large};
  padding-top: 10px;
`;

StyledAutor.defaultProps = {
  theme: {
    fontSize: {
      large: '20px'
    }
  }
}