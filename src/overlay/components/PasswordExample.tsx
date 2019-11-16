import * as React from "react";
import styled from "@emotion/styled";

import COLORS from "../../utils/colors";

const PasswordExampleContainer = styled.div`
  font-family: Rubik;
  display: flex;
  height: 47px;
  background-color: #D4206C;
  border-radius: 6px;
  flex: 1;
  align-items: center;
  padding: 0px 16px;
  margin: 4px 0px;
`;

const ExampleText = styled.div`
  font-size: 12px;
  font-weight: bold;
  line-height: 14px;
  color: white;
  opacity: 0.2;
  margin-right: 12px;
`;

const HintText = styled.div`
  font-size: 20px;
  line-height: 24px;
  color: white;
  opacity: 0.5;
`;

interface IModalProps {
  children: string,
}

export const PasswordExample = (props: IModalProps) => {
  
  return (
    <PasswordExampleContainer>
      <ExampleText>EXAMPLE</ExampleText>
      <HintText>{props.children}</HintText>
    </PasswordExampleContainer>
  );
};
