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


export const ChatModalQuiz2 = (props: IProps) => {

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
    props.setButtonDisabled(true);
  };

  const onClickB = () => {
    props.setButtonDisabled(false);
    setA(false);
    setB(true);
    setC(false);
  };

  const onClickC = () => {
    props.setButtonDisabled(true);
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
        <QuizQuestion number={"B)"} answer={"No one, maybe my parents."} correct isSelected={selectedB} onSelect={onClickB}/>
        <QuizQuestion number={"C)"} answer={"Strangers."} isSelected={selectedC} onSelect={onClickC}/>
      </div>
    </div>
  )
};
