import * as React from "react";

import * as nlp from "compromise";

import { PasswordExample } from "../../components/PasswordExample";
import { Input } from "../../components/Input";
import { IPasswordOutput } from "./index";

interface IProps {
  buttonText: string;
  output: IPasswordOutput;
  setOutput: (output: IPasswordOutput) => void;
  setButtonDisabled: (state: boolean) => void;
}


export const PasswordModalForm = (props: IProps) => {

  React.useEffect(() => props.setButtonDisabled(true), []);

  const onChange = (event: any) => {
    if (event.target.value.split(" ").length > 5) {
      props.setButtonDisabled(false);
    } else {
      props.setButtonDisabled(true);
    }
    props.setOutput({...props.output, story: event.target.value});
  }

  const onBlur = () => {
    const values = nlp(props.output.story).nouns().out("array") as string[];
    console.log(values);
    props.setOutput({...props.output, password: values.join("") + values.length +"!"});
  };

  return (
    <div>
      <div style={{flex: 1, padding: 19, fontSize: 20, fontFamily: "Rubik"}}>
        To create a strong password, think of a short story you love and get to remeber! 💭❤️
      </div>
      <div style={{flex: 1, padding: 19}}>
        <PasswordExample>
          The elephant went to the lake to get bananas!
        </PasswordExample>
        <PasswordExample>
          The frog jumped over the fence till the road!
        </PasswordExample>
      </div>
      <div style={{display: "flex", flex: 1, padding: 19, flexDirection: "column"}}>
        <Input placeholder="Type your own funny story here." value={props.output.story} onChange={onChange} onBlur={onBlur} />
      </div>
    </div>
  )
};
