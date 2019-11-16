import * as React from "react";
import styled from "@emotion/styled";

import COLORS from "../../utils/colors";

const StyledButton = styled.div`
  display: flex;
  height: 64px;
  font-family: Rubik;
  font-weight: 500;
  font-size: 16px;
  background-color: ${COLORS.blue};
  box-shadow: 0px 4px 0px #140374;
  border-radius: 10px;
  flex: 1;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 4px 0;
  user-select: none;

  &:hover {
    background-color: #3613FF;
    box-shadow: 0px 4px 0px #140374;
  }

  &:active {
    background-color: ${COLORS.blue};
    box-shadow: 0px 0px 0px #9E9E9E;
    margin: 8px 0 0;
  }

`

interface IModalProps {
  children: string,
  onClick: (event: React.MouseEvent) => void,
}

export const Button = (props: IModalProps) => {
  
  return (
    <StyledButton onClick={props.onClick}>
      {props.children}
    </StyledButton>
  );
};
