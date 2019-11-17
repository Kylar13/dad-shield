import * as React from "react";
import { Input } from "../../components/Input";
import { IChatOutput } from "./index";
import { QuizQuestion } from "../../components/QuizQuestion";

interface IProps {
  buttonText: string;
  output: IChatOutput;
  setOutput: (output: IChatOutput) => void;
  setButtonDisabled: (disabled: boolean) => void;
}


export const ChatModalQuiz = (props: IProps) => {

  React.useEffect(() => {
    props.setButtonDisabled(true);
  }, []);

  const [selectedA, setA] = React.useState<boolean>(false);
  const [selectedB, setB] = React.useState<boolean>(false);
  const [selectedC, setC] = React.useState<boolean>(false);

  const onClickA = () => {
    setA(true);
    setB(false);
    setC(false);
    props.setButtonDisabled(false);
  };

  const onClickB = () => {
    setA(false);
    setB(true);
    setC(false);
    props.setButtonDisabled(true);

  };

  const onClickC = () => {
    setA(false);
    setB(false);
    setC(true);
    props.setButtonDisabled(true);

  };


  return (
    <div>
      <div style={{ flex: 1, padding: 19, fontSize: 20, fontFamily: "Rubik" }}>
        If a stranger ask you to do something specific what do you do?
      </div>
      <div style={{ flex: 1, padding: 19 }}>
        <QuizQuestion number={"A)"} answer={"I call my parents before answering."} correct isSelected={selectedA} onSelect={onClickA}/>
        <QuizQuestion number={"B)"} answer={"I do what they ask."} isSelected={selectedB} onSelect={onClickB}/>
        <QuizQuestion number={"C)"} answer={"I answer them for more information."} isSelected={selectedC} onSelect={onClickC}/>
      </div>
    </div>
  )
};
