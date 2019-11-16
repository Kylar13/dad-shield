import * as React from "react";

import { PasswordExample } from "../../components/PasswordExample";
import { Input } from "../../components/Input";

interface IProps {
  buttonText: string;
}


export const PasswordModalForm = (props: IProps) => {

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
        <Input />
      </div>
    </div>
  )
};
