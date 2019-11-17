import * as React from "react";
import { Core } from "../core/core";
import { IInterceptorAction } from "../core/models";
import { PasswordChallenge } from "./containers/PasswordChallenge/index";
import { ChatChallenge } from "./containers/ChatChallenge/index";
import { ChallengeMethods } from "../core/enums";

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

  if (!!challenge) {
    if (challenge.method === ChallengeMethods.PASSWORD) return (<PasswordChallenge onFinish={onFinish} />);
    if (challenge.method === ChallengeMethods.CHAT) return (<ChatChallenge onFinish={onFinish} />);
    return (<div></div>)
  } else {
    return null;
  }
};
