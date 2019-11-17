import * as React from "react";

interface IProps {
  buttonText: string;
}

export const ChatModalIntro = (props: IProps) => {
  
  return (
    <div>
      <img style={{height: 150, width: "100%"}} src="https://s3.eu-central-1.amazonaws.com/static.goin/junction/IllusTalk.svg" />
      <div style={{flex: 1, padding: 19, fontSize: 20, fontFamily: "Rubik"}}>
      The Zombies will try to trick you. Make sure you know the person you are talking to.<br/>
      Answer the next quiz to defeat them.
      </div>
    </div>
  )
};
