import * as React from "react";
import { Core } from "../core/core";
import { IInterceptorAction } from "../core/models";
import { PasswordChallenge } from "./containers/PasswordChallenge/index";
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
    // TODO: we should update this with Honorios Code
    if (challenge.method === ChallengeMethods.CHAT) return (<PasswordChallenge onFinish={onFinish} />);
    return (<div></div>)
  } else {
    return null;
  }
};
