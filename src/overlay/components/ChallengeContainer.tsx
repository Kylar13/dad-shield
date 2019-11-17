import * as React from "react";

import styled from "@emotion/styled";

import { FullScreenModal } from "./FullScreenModal";
import { Button } from "./Button";
import { HeaderImage } from "./HeaderImage";

interface IProps {
  headerImageUrl: string;
  children: JSX.Element[];
  onFinish: () => void;
  buttonDisabled?: boolean;
  setButtonDisabled?: (state: boolean) => void;
}

const ChallengeContent = styled.div`
  flex: 1;
  color: white;
  font-family: Rubic;
  max-width: 602px;
  margin: auto;
  transition: all 1s linear;
`;

export const ChallengeContainer = (props: IProps) => {

  const {headerImageUrl, onFinish, children, buttonDisabled = false, setButtonDisabled = () => null} = props

  const [stage, setStage] = React.useState(0);

  const Stage = children[stage];

  const onClick = () => {

    if (buttonDisabled) return;
    
    setButtonDisabled(false);

    if (stage === children.length -1) {
      onFinish();
    } else {
      setStage(stage + 1);
    }
  };

  return (
    <FullScreenModal>
      <div style={{display: "block"}}>
        <div style={{maxWidth: 800, margin: "auto"}}>
          <HeaderImage src={headerImageUrl}></HeaderImage>
        </div>
        <ChallengeContent>
          {Stage}
        </ChallengeContent>
        <div style={{maxWidth: 600, margin: "auto"}}>
          <Button onClick={onClick} disabled={buttonDisabled}>
            {Stage.props.buttonText}
          </Button>
        </div>
      </div>
    </FullScreenModal>
  )
};
