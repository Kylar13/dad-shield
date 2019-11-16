import * as React from "react";
import { PasswordModalIntro } from "./PasswordModalIntro";
import { PasswordModalForm } from "./PasswordModalForm";
import { PasswordModalConfirm } from "./PasswordModalConfirm";
import { ChallengeContainer } from "../../components/ChallengeContainer";

export interface IStage {
  nextStage: Function
}

export const PasswordChallenge = () => {

  const url = "https://s3.eu-central-1.amazonaws.com/static.goin/junction/TitlePassword.svg";

  return (
    <ChallengeContainer headerImageUrl={url}>
      <PasswordModalIntro buttonText="Let's go!"/>
      <PasswordModalForm buttonText="Next"/>
      <PasswordModalConfirm buttonText="Confirm"/>
    </ChallengeContainer>
  )
};
