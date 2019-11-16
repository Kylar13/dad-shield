import * as React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import COLORS from "../../utils/colors";

const hoverStyle = ` 
  &:hover {
    background-color: #3613FF;
    box-shadow: 0px 4px 0px #140374;
  }

  &:active {
    background-color: ${COLORS.blue};
    box-shadow: 0px 0px 0px #9E9E9E;
    margin: 8px 0 0;
  }
`;

const disabledStyle = props => css`
  cursor: ${props.disabled ? "default" : "pointer"};
  opacity: ${props.disabled ? "0.3" : "1"};
  
  ${!props.disabled && hoverStyle}
  `;
  
const StyledButton = styled.div`
  display: flex;
  height: 64px;
  font-family: Rubik;
  font-weight: 500;
  font-size: 20px;
  background-color: ${COLORS.blue};
  box-shadow: 0px 4px 0px #140374;
  border-radius: 10px;
  flex: 1;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 4px 0;
  user-select: none;

  ${disabledStyle}

`

interface IModalProps {
  children: string,
  onClick: (event: React.MouseEvent) => void,
  disabled?: boolean;
}

export const Button = (props: IModalProps) => {

  const { disabled = false, onClick, children} = props;
  
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};
