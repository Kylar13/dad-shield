import * as React from "react";

interface IProps {
  buttonText: string;
}

export const PasswordModalIntro = (props: IProps) => {

  return (
    <div>
      <img style={{height: 150, width: "100%"}} src="https://s3.eu-central-1.amazonaws.com/static.goin/junction/IllusPassword.svg" />
      <div style={{flex: 1, padding: 19, fontSize: 20, fontFamily: "Rubik"}}>
      Your candy is in danger! The Zombies are coming for your candy. <br/> Create the most strongest password in the world to protect your candy!
      </div>
    </div>
  )
};
