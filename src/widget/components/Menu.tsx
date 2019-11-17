import * as React from "react";

import { Header } from "./Header";

interface Props {
  style?: React.CSSProperties;
  onDailyChallengePressed: () => void;
  onPasswordHintPressed: () => void;
  onQuizResultsPressed: () => void;
}

export const Menu = (props: Props) => {
  return (
    <div style={{ ...props.style, flexDirection: "column", paddingLeft: 56, paddingRight: 56 }}>
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
          height: 80,
          marginBottom: 24,
          borderRadius: 5,
          fontFamily: "Rubik",
          fontSize: 24,
          color: "white",
          boxShadow: "0px 4px 0px #140374",
          border: "none",
          outline: "none",
        }}
        onClick={props.onDailyChallengePressed}
      >
        Daily Challenge
      </button>
      <button
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "blue",
          height: 80,
          marginBottom: 24,
          borderRadius: 5,
          fontFamily: "Rubik",
          fontSize: 24,
          color: "white",
          boxShadow: "0px 4px 0px #140374",
          border: "none",
          outline: "none",
        }}
        onClick={props.onPasswordHintPressed}
      >
        Protect your candy
      </button>
      <button
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "blue",
          height: 80,
          marginBottom: 24,
          borderRadius: 5,
          fontFamily: "Rubik",
          fontSize: 24,
          color: "white",
          boxShadow: "0px 4px 0px #140374",
          border: "none",
          outline: "none",
        }}
        onClick={props.onQuizResultsPressed}
      >
        Let's talk
      </button>
    </div>
  );
};
