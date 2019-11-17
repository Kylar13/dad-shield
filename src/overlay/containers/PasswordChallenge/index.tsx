import * as React from "react";
import { PasswordModalIntro } from "./PasswordModalIntro";
import { PasswordModalForm } from "./PasswordModalForm";
import { PasswordModalConfirm } from "./PasswordModalConfirm";
import { ChallengeContainer } from "../../components/ChallengeContainer";

export interface IProps {
  onFinish: (output?: any) => void;
}

export interface IPasswordOutput {
  story: string;
  password: string;
}

export const PasswordChallenge = (props: IProps) => {

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [output, setOutput] = React.useState<IPasswordOutput>({ story: "", password: "" });

  const url = "https://s3.eu-central-1.amazonaws.com/static.goin/junction/TitlePassword.svg";

  const onFinish = () => {
    chrome.storage.sync.set({
      widgetData: {
        state: "NEW_PASSWORD",
        metadata: {
          pwdHint: output.story,
          creationTime: Date.now(),
          ttl: 6 * 1000,
        }
      }
    });
    props.onFinish(output);
  }

  return (
    <ChallengeContainer headerImageUrl={url} onFinish={onFinish} buttonDisabled={buttonDisabled} setButtonDisabled={setButtonDisabled}>
      <PasswordModalIntro buttonText="Let's go!" />
      <PasswordModalForm buttonText="Next" output={output} setOutput={setOutput} setButtonDisabled={setButtonDisabled} />
      <PasswordModalConfirm buttonText="Confirm" output={output} setButtonDisabled={setButtonDisabled} />
    </ChallengeContainer>
  )
};
