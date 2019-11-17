import * as React from "react";
import { Core } from "../core/core";
import { IInterceptorAction } from "../core/models";
import { PasswordChallenge } from "./containers/PasswordChallenge/index";
import { ChatChallenge } from "./containers/ChatChallenge/index";

export const Overlay = () => {

  let core;

  const [challenge, setChallenge] = React.useState<IInterceptorAction | null>(null);

  React.useEffect(() => {
    core = new Core();
    core.registerListener((info: IInterceptorAction) => {
      console.log(info);
      setChallenge(info);
    });
    core.start();
  }, []);

  const onFinish = () => {
    setChallenge(null);
  }

  if (!!challenge && challenge.challenge === "password") {
    return (
      <PasswordChallenge onFinish={onFinish}/>
    )
  } else if (!!challenge && challenge.challenge === "chat"){
    return <ChatChallenge onFinish={onFinish}/>;
  } else {
    return null;
  }
};
