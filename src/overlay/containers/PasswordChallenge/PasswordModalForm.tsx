import * as React from "react";

import { PasswordExample } from "../../components/PasswordExample";
import { Input } from "../../components/Input";
import { IPasswordOutput } from "./index";

interface IProps {
  buttonText: string;
  output: IPasswordOutput;
  setOutput: (output: IPasswordOutput) => void;
}


export const PasswordModalForm = (props: IProps) => {

  const onChange = (event: any) => {
    props.setOutput({...props.output, story: event.target.value})
  }

  return (
    <div>
      <div style={{flex: 1, padding: 19, fontSize: 20, fontFamily: "Rubik"}}>
        To create a strong password, think of a short story you love!
      </div>
      <div style={{flex: 1, padding: 19}}>
        <PasswordExample>
          The elephant went to the lake to get bananas!
        </PasswordExample>
        <PasswordExample>
          The lazy frog jumped over the fence!
        </PasswordExample>
      </div>
      <div style={{display: "flex", flex: 1, padding: 19, flexDirection: "column"}}>
        <Input placeholder="Type your own funny story here." value={props.output.story} onChange={onChange} />
      </div>
    </div>
  )
};
