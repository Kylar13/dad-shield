import * as React from "react";
import { Input } from "../../components/Input";
import { IChatOutput } from "./index";
import { QuizQuestion } from "../../components/QuizQuestion";

interface IProps {
  buttonText: string;
  output: IChatOutput;
  setOutput: (output: IChatOutput) => void;
}


export const ChatModalQuiz2 = (props: IProps) => {

  const [selectedA, setA] = React.useState<boolean>(false);
  const [selectedB, setB] = React.useState<boolean>(false);
  const [selectedC, setC] = React.useState<boolean>(false);

  const onClickA = () => {
    setA(true);
    setB(false);
    setC(false);
  };

  const onClickB = () => {
    setA(false);
    setB(true);
    setC(false);
  };

  const onClickC = () => {
    setA(false);
    setB(false);
    setC(true);
  };


  return (
    <div>
      <div style={{ flex: 1, padding: 19, fontSize: 20, fontFamily: "Rubik" }}>
        Who should you tell what your passwords are? 
      </div>
      <div style={{ flex: 1, padding: 19 }}>
        <QuizQuestion number={"A)"} answer={"My friends."} isSelected={selectedA} onSelect={onClickA}/>
        <QuizQuestion number={"B)"} answer={"No one, maybe my parents."} isSelected={selectedB} onSelect={onClickB}/>
        <QuizQuestion number={"C)"} answer={"Strangers."} isSelected={selectedC} onSelect={onClickC}/>
      </div>
    </div>
  )
};
