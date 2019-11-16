import * as React from "react";
import { Core } from "../core/core";
import { IInterceptorAction } from "../core/models";
import { PasswordChallenge } from "./containers/PasswordChallenge/index";

export const Overlay = () => {

  let core;

  const [visible, setVisibility] = React.useState(false);

  React.useEffect(() => {
    core = new Core();
    core.registerListener((info: IInterceptorAction) => {
      console.log(info);
      setVisibility(true);
    });
    core.start();
  }, []);

  return (
    <PasswordChallenge/>
  )
};
