import * as React from "react";
import styled from "@emotion/styled";

import COLORS from "../../utils/colors";

const InputContainer = styled.input`
  display: flex;
  height: 58px;
  background-color: white;
  border-radius: 6px;
  align-items: center;
  padding: 0px 16px;
  font-family: Rubik;
  font-size: 20px;
  line-height: 24px;
  border-width: 0px;
  color: black;
  border: 2px solid transparent;

  &:focus {
    outline: none;
    border: 2px solid black;
  }

  &::placeholder {
    color: #D8D8D8;
  }
`;

interface IModalProps {
}

export const Input = (props: IModalProps) => {
  
  return (
    <InputContainer placeholder={"Type your own funny story here."} />
  );
};
