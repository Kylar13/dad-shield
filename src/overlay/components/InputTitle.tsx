import * as React from "react";
import styled from "@emotion/styled";

import COLORS from "../../utils/colors";

const InputTitleContainer = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #FFFFFF;
  opacity: 0.8;
`;

interface IModalProps {
  children: string
}

export const InputTitle = (props: IModalProps) => {
  
  return (
    <InputTitleContainer>
      {props.children}
    </InputTitleContainer>
  );
};
