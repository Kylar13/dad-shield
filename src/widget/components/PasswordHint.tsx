import * as React from "react";

import { Header } from "./Header";
import { PasswordHeader, Lock } from "../../assets";

interface Props {
  style?: React.CSSProperties;
  passwordHint: string;
  onEndPress: () => void;
}

export const PasswordHint = (props: Props) => {
  const [isPressed, setIsPressed] = React.useState(false);
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  return (
    <div style={{ ...props.style, flexDirection: "column", paddingLeft: 56, paddingRight: 56 }}>
      <Header style={{ display: "flex", paddingTop: 60, paddingBottom: 20 }} img={PasswordHeader} />
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
      <p style={{ marginBottom: 32, fontFamily: "Rubik", fontSize: 16, color: "white" }}>
        Remember to show it to no one, and change them often!
      </p>
      <button
        style={{
          height: 182,
          marginBottom: isPressed ? 20 : 16,
          backgroundColor: passwordVisible ? "#D44A85" : "#990F4B",
          borderRadius: 9,
          border: "none",
          outline: "none",
          display: "flex",
          justifyContent: "center",
        }}
        onClick={() => {
          setPasswordVisible(!passwordVisible);
        }}
      >
        {passwordVisible ? (
          <p style={{ fontFamily: "Rubik", fontSize: 24, color: "white" }}>{props.passwordHint}</p>
        ) : (
          <img src={Lock} />
        )}
      </button>
      <button
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "blue",
          height: 48,
          marginBottom: isPressed ? 20 : 24,
          borderRadius: 5,
          fontFamily: "Rubik",
          fontSize: 16,
          color: "white",
          boxShadow: isPressed ? "0px 0px 0px #9E9E9E" : "0px 4px 0px #140374",
          border: "none",
          outline: "none",
        }}
        onClick={() => {
          setIsPressed(true);
          setTimeout(() => {
            setIsPressed(false);
            props.onEndPress();
          }, 150);
        }}
      >
        Next
      </button>
    </div>
  );
};