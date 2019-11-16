import * as React from "react";
import styled from "@emotion/styled";

import COLORS from "../../utils/colors";

const PasswordHighlightContainer = styled.div`
  display: flex;
  height: 70px;
  background-color: #D44A85;
  border-radius: 9px;
  align-items: center;
  padding: 0px 42px;

  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 29.7872px;
  line-height: 35px;
  color: white;
`;

interface IModalProps {
  children: string,
}

export const PasswordHighlight = (props: IModalProps) => {
  
  return (
    <PasswordHighlightContainer>
      {props.children}
    </PasswordHighlightContainer>
  );
};
