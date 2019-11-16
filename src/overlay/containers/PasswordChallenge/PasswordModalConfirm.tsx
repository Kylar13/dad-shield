import * as React from "react";

import { Input } from "../../components/Input";
import { InputTitle } from "../../components/InputTitle";
import { PasswordHighlight } from "../../components/PasswordHighlight";

interface IProps {
  buttonText: string;
}

export const PasswordModalConfirm = (props: IProps) => {

  return (
    <div>
      <div style={{flex: 1, padding: 19, fontSize: 20, fontFamily: "Rubik"}}>
        Amazing! The password you just created is super effective! The Zombies are running away!
      </div>
      <div style={{flex: 1, margin: 19, display: "flex", flexDirection: "column"}}>
        <InputTitle>Password:</InputTitle>
        <PasswordHighlight>pandatreeball!</PasswordHighlight>
        <InputTitle>Try writing your new password:</InputTitle>
        <Input>Write your new password again here</Input>
      </div>
    </div>
  )
};
