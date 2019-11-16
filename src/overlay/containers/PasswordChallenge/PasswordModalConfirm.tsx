import * as React from "react";

import { Input } from "../../components/Input";
import { InputTitle } from "../../components/InputTitle";
import { PasswordHighlight } from "../../components/PasswordHighlight";
import { IPasswordOutput } from "./index";

interface IProps {
  buttonText: string;
  output: IPasswordOutput;
  setButtonDisabled: (disabled: boolean) => void;
}

export const PasswordModalConfirm = (props: IProps) => {

  React.useEffect(() => props.setButtonDisabled(true), []);

  const [password, setPassword] = React.useState("");

  const onChange = (event: any) => {
    if (event.target.value === props.output.password) {
      props.setButtonDisabled(false);
    } else {
      props.setButtonDisabled(true);
    }
    setPassword(event.target.value);
  }

  return (
    <div>
      <div style={{flex: 1, padding: 19, fontSize: 20, fontFamily: "Rubik"}}>
        Amazing! The password you just created is super effective! The Zombies are running away!
      </div>
      <div style={{flex: 1, margin: 19, display: "flex", flexDirection: "column"}}>
        <InputTitle>Password:</InputTitle>
        <PasswordHighlight>{props.output.password}</PasswordHighlight>
        <InputTitle>"Try writing your new password:"</InputTitle>
        <Input placeholder="Write your new password again here." value={password} onChange={onChange}/>
      </div>
    </div>
  )
};
