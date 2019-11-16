import * as React from "react";
import styled from "@emotion/styled";

const HeaderImageContainer = styled.img`
  height: 85px;
  width: 100%
`;

interface IProps {
  src: string
}

export const HeaderImage = (props: IProps) => {
  
  return (
    <HeaderImageContainer src={props.src} />
  );
};
