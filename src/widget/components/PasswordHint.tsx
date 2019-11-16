import * as React from "react";

import { Header } from "./Header";
import { PasswordHeader } from "../../assets";

interface Props {
  style?: React.CSSProperties;
  onEndPress: () => void;
}

export const PasswordHint = (props: Props) => {
  const [isPressed, setIsPressed] = React.useState(false);

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
      <button
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "blue",
          height: 48,
          marginBottom: isPressed ? 20 : 24,
          border: "none",
          borderRadius: 5,
          fontFamily: "Rubik",
          fontSize: 16,
          color: "white",
          boxShadow: isPressed ? "0px 0px 0px #9E9E9E" : "0px 4px 0px #140374",
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
