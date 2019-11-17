import * as React from "react";
import { ChatModalIntro } from "./ChatModalIntro";
import { ChatModalQuiz } from "./ChatModalQuiz";
import { ChallengeContainer } from "../../components/ChallengeContainer";
import { ChatModalQuiz2 } from "./ChatModalQuiz2";

export interface IProps {
  onFinish: (output?: any) => void;
}

export interface IChatOutput {
  story: string;
  password: string;
}

export const ChatChallenge = (props: IProps) => {

  const [output, setOutput] = React.useState<IChatOutput>({story: "", password: "pandatreeball!"});

  const url = "https://s3.eu-central-1.amazonaws.com/static.goin/junction/TitleTalk.svg";

  const onFinish = () => {
    // Do logic here if needed like sending event
    props.onFinish(output);
  }

  return (
    <ChallengeContainer headerImageUrl={url} onFinish={onFinish}>
      <ChatModalIntro buttonText="Let's go!"/>
      <ChatModalQuiz buttonText="Next" output={output} setOutput={setOutput}/>
      <ChatModalQuiz2 buttonText="Done" output={output} setOutput={setOutput}/>
    </ChallengeContainer>
  )
};
