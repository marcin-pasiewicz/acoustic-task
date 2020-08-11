import React, { ReactElement } from "react";
import moment from "moment";
import styled from "styled-components";
import { FULL_DATE_WITH_SECONDS } from "./../../constants/dateFormats";

interface Props {
  value: string;
}

export default function Date({ value }: Props): ReactElement {
  return (
    <StyledDate>{moment(value).format(FULL_DATE_WITH_SECONDS)}</StyledDate>
  );
}

const StyledDate = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: #808080;
  padding-top: 10px;
`;

StyledDate.defaultProps = {
  theme: {
    fontSize: {
      small: "14px",
    },
  },
};
